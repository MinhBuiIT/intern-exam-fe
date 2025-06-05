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

          <div class="form-actions">
            <button type="submit" class="btn-submit">Tạo Bài Thi</button>
            <button type="reset" class="btn-reset" @click="handleCancel">Hủy</button>
          </div>
        </form>
      </div>
    </div>
  </AdminLayout>
</template>
<script setup lang="ts">
import HeadingAdmin from '@/components/HeadingAdmin.vue'
import AdminLayout from '@/layout/AdminLayout.vue'
import { datePlusDay, mergeDateTime } from '@/utils'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const examFormData = reactive({
  title: '',
  description: '',
  duration: 60,
  scoreQuestion: 100,
  questions: [],
})
const startedAt = ref({
  date: new Date().toISOString(),
  time: new Date(),
})
const expires = ref({
  date: datePlusDay(new Date(), 7).toISOString(),
  time: new Date(),
})

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Exam Created:', examFormData)

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
</style>
