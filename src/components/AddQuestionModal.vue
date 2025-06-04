<template>
  <VaModal v-model="isVisible" hide-default-actions>
    <VaForm @submit.prevent="handleSubmitEdit">
      <div class="form-group">
        <label>Nội dung câu hỏi:</label>
        <VaInput v-model="newQuestion!.content" class="w-full" />
      </div>

      <div class="form-group">
        <label>Danh mục:</label>
        <VaSelect v-model="newQuestion!.category" :options="['NB', 'TH', 'VD', 'VDC']" />
      </div>
      <VaRadio
        v-model="newQuestion.type"
        :options="[
          {
            text: 'Một đáp án đúng',
            value: 'single',
          },
          {
            text: 'Nhiều đáp án đúng',
            value: 'multiple',
          },
        ]"
        value-by="value"
      />
      <div v-if="newQuestion.type" class="form-group" :style="{ marginTop: '10px' }">
        <label>Câu trả lời:</label>
        <div v-if="newQuestion.type == 'multiple'">
          <div v-for="(answer, index) in newQuestion!.answers" :key="index" class="answer-item">
            <VaInput v-model="answer.content" :style="{ width: '75%' }" />
            <VaCheckbox v-model="answer.isCorrect" label="Đúng" />
            <VaButton
              icon="delete"
              color="danger"
              preset="secondary"
              v-if="newQuestion!.answers.length > 2"
              @click="handleRemoveAnswer(index)"
            />
          </div>
        </div>
        <div
          v-else-if="newQuestion.type == 'single'"
          v-for="(answer, index) in newQuestion!.answers"
          :key="index"
          class="answer-item"
        >
          <VaInput v-model="answer.content" :style="{ width: '75%' }" />
          <VaRadio v-model="correctAnswerIndex" label="Đúng" :option="index + 1" />
        </div>
        <VaButton
          v-if="newQuestion!.answers.length < 5"
          icon="add"
          preset="secondary"
          @click="handleAddQuestion"
          >Thêm câu trả lời</VaButton
        >
      </div>

      <div class="form-group">
        <label>Giải thích:</label>
        <VaTextarea v-model="newQuestion!.explain" class="w-full" />
      </div>

      <div class="modal-actions">
        <VaButton color="primary" type="submit">Lưu</VaButton>
      </div>
    </VaForm>
  </VaModal>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, reactive, ref, watch } from 'vue'
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const isVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
const newQuestion = reactive({
  content: '',
  category: 'NB',
  type: '',
  answers: [
    { content: '', isCorrect: false },
    { content: '', isCorrect: false },
  ],
  explain: '',
})
const correctAnswerIndex = ref<number>(1)
watch(correctAnswerIndex, (newIndex) => {
  if (newQuestion.type === 'single' && newIndex !== null) {
    // Đặt tất cả câu trả lời thành false
    newQuestion.answers.forEach((ans, idx) => {
      ans.isCorrect = idx === newIndex - 1 // Chỉ đặt true cho câu trả lời được chọn
    })
  }
})
watch(
  () => newQuestion.type,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      // Reset answers when type changes (giữ nguyên câu trả lời , reset đáp án)
      newQuestion.answers = newQuestion.answers.map((answer) => ({
        content: answer.content,
        isCorrect: false,
      }))
    }
  },
)

const handleAddQuestion = () => {
  if (newQuestion.answers.length < 5) {
    newQuestion.answers.push({ content: '', isCorrect: false })
  }
}
const handleRemoveAnswer = (index: number) => {
  if (newQuestion.answers.length > 2) {
    newQuestion.answers.splice(index, 1)
  }
}
const handleSubmitEdit = () => {
  // Logic to save the new question
  console.log('New Question:', newQuestion)
}
</script>

<style scoped>
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
