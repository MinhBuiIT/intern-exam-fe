<template>
  <VaModal v-model="isVisible" hide-default-actions>
    <div class="qbank-search">
      <VaForm
        :style="{ display: 'flex', 'align-items': 'center', gap: '10px' }"
        @submit.prevent="handleSubmitSearch"
      >
        <VaInput
          v-model="searchFormData.search"
          placeholder="Tìm kiếm câu hỏi..."
          clearable
          class="w-1/2"
          background="#fff"
        />
        <div :style="{ width: '20%' }">
          <VaSelect
            v-model="searchFormData.category"
            :options="questionCategory"
            placeholder="Loại"
            defa
          />
        </div>
        <VaButton color="primary">Tìm kiếm</VaButton>
      </VaForm>
    </div>
    <!-- Question Bank Table -->
    <div class="table-container">
      <table class="question-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Nội dung câu hỏi</th>
            <th>Loại</th>
            <th>Chọn</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(question, index) in questions" :key="question.id">
            <td>{{ index + 1 }}</td>
            <td class="question-content">{{ question.text }}</td>
            <td>
              <span class="category-tag" :class="`category-${question.category.toLowerCase()}`">
                {{ question.category }}
              </span>
            </td>
            <td>
              <div><VaCheckbox :v-model="true" /></div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="pagination">
        <button
          class="pagination-btn"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          <VaIcon name="va-arrow-left" />
        </button>
        <span class="page-number">{{ currentPage }} / {{ totalPages }}</span>
        <button
          class="pagination-btn"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          <VaIcon name="va-arrow-right" />
        </button>
      </div>
    </div>
  </VaModal>
</template>
<script setup lang="ts">
import { computed, defineEmits, defineProps, reactive, ref } from 'vue'
const questionCategory = ['NB', 'TH', 'VD', 'VDC', 'All']
const searchFormData = reactive({
  search: '',
  category: 'All',
})
const questions = ref([
  {
    id: 1,
    text: 'Câu hỏi về kiến thức cơ bản của hệ điều hành?',
    category: 'NB',
    createdAt: '2025-05-30T10:30:00',
  },
  {
    id: 2,
    text: 'Hãy mô tả cách thức hoạt động của thuật toán sắp xếp nhanh (Quick Sort)?',
    category: 'TH',
    createdAt: '2025-05-29T14:20:00',
  },
  {
    id: 3,
    text: 'Giải thích nguyên lý hoạt động của mô hình OSI trong mạng máy tính?',
    category: 'VD',
    createdAt: '2025-05-28T09:15:00',
  },
  {
    id: 4,
    text: 'Phân tích ưu nhược điểm của các phương pháp phát hiện tấn công mạng hiện đại?',
    category: 'VDC',
    createdAt: '2025-05-27T16:45:00',
  },
])
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const isVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
// Pagination
const currentPage = ref(1)
const totalPages = ref(5)

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Fetch data for the new page
  }
}
const handleSubmitSearch = () => {
  // Handle search logic here
  console.log('Search submitted:', searchFormData)
}
</script>

<style scoped>
.qbank-search {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(199, 194, 194, 0.1);
  border: 1px solid rgba(209, 213, 219, 0.5);
  height: 100px;
  padding: 0px 30px;
}
/* Table styles */
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
/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-top: 1px solid #e5e7eb;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number {
  margin: 0 16px;
  font-size: 14px;
  color: #4b5563;
}
</style>
