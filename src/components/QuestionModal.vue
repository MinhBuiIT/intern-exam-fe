<template>
  <VaModal v-model="isVisible" hide-default-actions>
    <div v-if="!editMode" :style="{ position: 'relative' }">
      <div class="modal-actions">
        <VaButton color="primary" icon="edit" @click="toggleEditMode"></VaButton>
        <VaButton color="danger" icon="clear" @click="handleDelete"></VaButton>
      </div>
      <h3 class="questionItem-heading">{{ questionItem?.content }}</h3>
      <div :style="{ marginTop: '24px' }">
        <div class="questionItem-box" v-for="answer in questionItem?.answers" :key="answer.id">
          <span>{{ answer.content }}</span>
          <div>
            <span v-if="answer.isCorrect" class="circle circle-success">
              <VaIcon name="check" color="#fff" size="14px" />
            </span>

            <span v-else class="circle circle-error">
              <VaIcon name="close" color="#fff" size="14px" />
            </span>
          </div>
        </div>

        <div v-if="questionItem?.explain" class="questionItem-explain">
          <p><strong>Giải thích:</strong> {{ questionItem.explain }}</p>
        </div>
      </div>
    </div>

    <!-- Edit mode -->
    <div v-else :style="{ position: 'relative', paddingTop: '24px' }">
      <VaForm @submit.prevent="handleSubmitEdit">
        <div class="form-group">
          <label>Nội dung câu hỏi:</label>
          <VaInput v-model="editedQuestion!.content" class="w-full" />
        </div>

        <div class="form-group">
          <label>Danh mục:</label>
          <VaSelect v-model="editedQuestion!.category" :options="['NB', 'TH', 'VD', 'VDC']" />
        </div>

        <div class="form-group">
          <label>Câu trả lời:</label>
          <div v-for="(answer, index) in editedQuestion!.answers" :key="index" class="answer-item">
            <VaInput v-model="answer.content" :style="{ width: '75%' }" />
            <VaCheckbox v-model="answer.isCorrect" label="Đúng" />
            <VaButton
              icon="delete"
              color="danger"
              preset="secondary"
              v-if="editedQuestion!.answers.length > 2"
              @click="handleRemoveAnswer(index)"
            />
          </div>
          <VaButton
            v-if="editedQuestion!.answers.length < 5"
            icon="add"
            preset="secondary"
            @click="handleAddQuestion"
            >Thêm câu trả lời</VaButton
          >
        </div>

        <div class="form-group">
          <label>Giải thích:</label>
          <VaTextarea v-model="editedQuestion!.explain" class="w-full" />
        </div>

        <div class="modal-actions">
          <VaButton color="primary" type="submit">Lưu</VaButton>
          <VaButton preset="secondary" @click="toggleEditMode">Hủy</VaButton>
        </div>
      </VaForm>
    </div>
  </VaModal>
</template>

<script setup lang="ts">
import type { IQuestionItem } from '@/@types/question.type.ts'
import { computed, defineEmits, defineProps, onMounted, ref } from 'vue'

const props = defineProps<{
  questionId: number
  modelValue: boolean
}>()
const editMode = ref(false)
const editedQuestion = ref<IQuestionItem | null>(null)

const questionItem = ref<IQuestionItem | null>(null)
onMounted(() => {
  //Fetch question data based on questionId
  questionItem.value = {
    content: 'Ngôn ngữ lập trình nào được sử dụng để phát triển ứng dụng web?',
    category: 'NB',
    explain: 'Javascript và C++ là ngôn ngữ lập trình phổ biến nhất để phát triển ứng dụng web.',
    createdAt: '2023-10-01T12:00:00Z',
    answers: [
      { id: 1, content: 'Javascript', isCorrect: true },
      { id: 2, content: 'R', isCorrect: false },
      { id: 3, content: 'C++', isCorrect: true },
      { id: 4, content: 'Swift', isCorrect: false },
    ],
  }
})
const toggleEditMode = () => {
  editMode.value = !editMode.value

  if (editMode.value) {
    editedQuestion.value = { ...questionItem.value } as IQuestionItem // Clone the questionItem for editing
    editedQuestion.value!.answers = editedQuestion.value!.answers.map((answer) => ({
      ...answer,
    })) // Clone answers to avoid mutating original data
  } else {
    editedQuestion.value = null // Reset editQuestion when exiting edit mode
  }
}
const handleDelete = () => {
  console.log('Delete Question:', questionItem.value)
  //tiến hành call API để xóa câu hỏi
  questionItem.value = null // Reset questionItem after deletion
  editMode.value = false // Exit edit mode if currently in it
}
const handleAddQuestion = () => {
  const answer = {
    id: Date.now(),
    content: '',
    isCorrect: false,
  }
  if (editedQuestion.value) {
    editedQuestion.value.answers.push(answer)
  }
}
const handleRemoveAnswer = (index: number) => {
  if (editedQuestion.value && editedQuestion.value.answers.length > 2) {
    editedQuestion.value.answers.splice(index, 1)
  }
}
const handleSubmitEdit = () => {
  console.log('Edited Question:', editedQuestion.value)
  //tiến hành call API để cập nhật câu hỏi và tắt chế độ chỉnh sửa
  editMode.value = false
  questionItem.value = { ...editedQuestion.value } as IQuestionItem // Update the original questionItem with edited data
}

const emit = defineEmits(['update:modelValue'])
const isVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>
<!-- User click "Xem chi tiết"
openModal() được gọi: showModal.value = !showModal.value và questionId.value = id
showModal thay đổi → modelValue trong QuestionModal thay đổi
isVisible trong QuestionModal cập nhật thông qua getter
VaModal cập nhật trạng thái (hiện/ẩn) do v-model="isVisible"
Khi modal được đóng (thông qua UI của VaModal):

VaModal phát sự kiện làm thay đổi v-model của nó
isVisible.value được gán giá trị mới (false)
Setter của isVisible phát ra update:modelValue với giá trị false
Component cha nhận sự kiện và cập nhật showModal = false -->
<style scoped>
.questionItem-heading {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
}
.questionItem-box {
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.questionItem-box span {
  font-size: 16px;
  color: #111827;
}
.circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-success {
  background-color: #6fbf73; /* Green */
}
.circle-error {
  background-color: #f87171; /* Red */
}
.modal-actions {
  position: absolute;
  top: 0px;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.answer-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.w-full {
  width: 100%;
}
</style>
