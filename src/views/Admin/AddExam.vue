<template>
  <AdminLayout>
    <div class="admin-add-exam">
      <HeadingAdmin>Thêm Bài Thi</HeadingAdmin>
      <div class="add-exam-form">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <VaInput
              v-model="examFormData.title"
              label="Tiêu đề bài thi"
              placeholder="Nhập tiêu đề bài thi"
              class="w-full"
            />
          </div>
          <div class="form-group">
            <VaTextarea v-model="examFormData.description" label="Mô tả bài thi" class="w-full" />
          </div>
          <div class="form-group" :style="{ display: 'flex', gap: '50px' }">
            <VaInput
              v-model.number="examFormData.duration"
              label="Thời gian làm bài (phút)"
              placeholder="Nhập thời gian làm bài"
              class="w-full"
            />
            <VaInput
              v-model.number="examFormData.scoreQuestion"
              label="Tổng điểm bài thi"
              placeholder="Nhập tổng điểm bài thi"
              class="w-full"
            />
          </div>
          <div
            class="form-group"
            :style="{ display: 'flex', gap: '50px', justifyContent: 'space-between' }"
          >
            <div>
              <VaDateInput v-model="startedAt.date" label="Thời gian bài thi có hiệu lực" />
              <VaTimeInput v-model="startedAt.time" label=" " />
            </div>
            <div>
              <VaDateInput v-model="expires.date" label="Thời gian hết hạn bài thi" />
              <VaTimeInput v-model="expires.time" label=" " />
            </div>
          </div>
          <div>
            <button class="btn-pick-question">+ Thêm câu hỏi</button>
          </div>
          <div :style="{ display: 'flex', gap: '20px', marginBottom: '15px' }">
            <div>
              <VaRadio
                v-model="selectedOptionPickQuestions"
                label="Import từ file .xsxl"
                option="IMPORT"
                name="radio-group"
              />
              <VaFileUpload
                v-if="selectedOptionPickQuestions === 'IMPORT'"
                v-model="fileUpload"
                hide-file-list
                file-types=".xlsx, .xls"
                @update:modelValue="handleFileUpload"
              />
            </div>
            <VaRadio
              v-model="selectedOptionPickQuestions"
              option="PICK"
              label="Chọn từ ngân hàng câu hỏi"
              name="radio-group"
            />
          </div>
          <div v-if="questionPickedExam.length > 0" class="table-container">
            <table class="question-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Nội dung câu hỏi</th>
                  <th>Loại</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(question, index) in questionPickedExam" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td class="question-content">{{ question.content }}</td>
                  <td>
                    <span
                      class="category-tag"
                      :class="`category-${question.category.toLowerCase()}`"
                    >
                      {{ question.category }}
                    </span>
                  </td>
                  <td>
                    <div><VaCheckbox v-model="question.isPick" /></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn-submit">Tạo Bài Thi</button>
            <button type="reset" class="btn-reset" @click="handleCancel">Hủy</button>
          </div>
        </form>
      </div>
    </div>
    <QuestionListModal v-model="showModal" />
  </AdminLayout>
</template>
<script setup lang="ts">
import type { IQuestionFormatExecl, IQuestionItemImport } from '@/@types/question.type'
import HeadingAdmin from '@/components/HeadingAdmin.vue'
import QuestionListModal from '@/components/QuestionListModal.vue'
import AdminLayout from '@/layout/AdminLayout.vue'
import { datePlusDay, mergeDateTime } from '@/utils'
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import * as XLSX from 'xlsx'
import { formatStringText } from '../../utils'

const router = useRouter()
const selectedOptionPickQuestions = ref<'IMPORT' | 'PICK'>('IMPORT')
const showModal = ref(false)
watch(selectedOptionPickQuestions, (newValue) => {
  if (newValue === 'PICK') {
    showModal.value = true
  } else {
    showModal.value = false
  }
})
const examFormData = reactive({
  title: '',
  description: '',
  duration: 60,
  scoreQuestion: 100,
  questions: [],
})
const fileUpload = ref([])
const questionPickedExam = ref<IQuestionItemImport[]>([])
const startedAt = ref({
  date: new Date().toISOString(),
  time: new Date(),
})
const expires = ref({
  date: datePlusDay(new Date(), 7).toISOString(),
  time: new Date(),
})
//Xử lý dữ liệu từ file Excel
const handleFileUpload = () => {
  const file = fileUpload.value[0]

  if (!file) return

  const reader = new FileReader()

  reader.onload = (e) => {
    const data = new Uint8Array(e.target?.result as ArrayBuffer)
    const workbook = XLSX.read(data, { type: 'array' })

    // Đọc sheet đầu tiên
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]

    // Chuyển đổi sang JSON
    const json = XLSX.utils.sheet_to_json(sheet)
    const questionsExcel = JSON.parse(JSON.stringify(json)) as IQuestionFormatExecl[]
    questionPickedExam.value = questionsExcel.map((item) => {
      const correctAnswer = item['Correct Answer'].split(' ')
      const answers: IQuestionItemImport['answers'] = []
      Object.keys(item).forEach((key) => {
        if (key.startsWith('Option')) {
          const keyAnswer = key.split(' ')[1] // Extract 'Option A' -> 'A'
          answers.push({
            content: formatStringText(item[key as keyof typeof item]!.toString()),
            isCorrect: correctAnswer.includes(keyAnswer), // Assuming Option1 is the correct answer
          })
        }
      })

      const question: IQuestionItemImport = {
        content: formatStringText(item['Content'].toString()),
        category: formatStringText(item['Category']),
        explain: formatStringText(item['Explain']),
        answers,
        type: correctAnswer.length > 1 ? 'MULTIPLE' : 'SINGLE',
        isPick: true,
      }
      return question
    })
    console.log('Questions from Excel:', questionPickedExam.value)
  }

  reader.readAsArrayBuffer(file)
  fileUpload.value = [] // Reset file upload after reading
}

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Exam Created:', examFormData)
  console.log('Selected Questions:', questionPickedExam.value)

  const startedDateTime = mergeDateTime(
    new Date(startedAt.value.date),
    new Date(startedAt.value.time),
  )
  const expiresDateTime = mergeDateTime(new Date(expires.value.date), new Date(expires.value.time))
  console.log('Started At:', startedDateTime)
  console.log('Expires At:', expiresDateTime)

  // Reset form after submission
}
const handleCancel = () => {
  // Reset form or navigate back
  router.go(-1)
}
</script>
<style scoped>
.admin-add-exam {
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  margin: 3px 0;
  position: relative;
}
.add-exam-form {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}
.form-group {
  margin-bottom: 15px;
}
.w-full {
  width: 100%;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}
.btn-submit,
.btn-reset {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-submit {
  background-color: #2563eb;
  color: white;
  font-weight: 600;
}
.btn-reset {
  background-color: #f3f4f6;
  color: #111827;
  font-weight: 600;
}
.btn-submit:hover {
  background-color: #1d4ed8;
}
.btn-reset:hover {
  background-color: #e5e7eb;
}
.btn-pick-question {
  background-color: transparent;
  color: #6c63ff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 0;
  display: inline-block;
  margin: 15px 0;
}

/* Table */
.table-container {
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.question-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: #fff;
}

.question-table th,
.question-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.question-table th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
}

.question-table tr:hover {
  background-color: #f9fafb;
}

.question-content {
  max-width: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.category-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
}

.category-nb {
  background-color: #e6f7ff;
  color: #0085ff;
}

.category-th {
  background-color: #e6fffb;
  color: #13c2c2;
}

.category-vd {
  background-color: #f9f0ff;
  color: #722ed1;
}

.category-vdc {
  background-color: #fff2e8;
  color: #fa8c16;
}
</style>
