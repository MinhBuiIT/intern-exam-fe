<template>
  <VaModal v-model="isVisible" hide-default-actions>
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
const questionItem = ref<IQuestionItem | null>(null)
onMounted(() => {
  //Fetch question data based on questionId
  questionItem.value = {
    content: 'Ngôn ngữ lập trình nào được sử dụng để phát triển ứng dụng web?',
    category: 'NB',
    createdAt: '2023-10-01T12:00:00Z',
    answers: [
      { id: 1, content: 'Javascript', isCorrect: true },
      { id: 2, content: 'R', isCorrect: false },
      { id: 3, content: 'C++', isCorrect: false },
      { id: 4, content: 'Swift', isCorrect: false },
    ],
  }
})
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
</style>
