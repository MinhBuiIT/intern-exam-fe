<template>
  <AdminLayout>
    <div class="category-container">
      <HeadingAdmin>
        <span>Ngân hàng câu hỏi</span>
      </HeadingAdmin>

      <div class="category-actions">
        <VaButton color="primary">Thêm loại câu hỏi</VaButton>
      </div>
      <!-- Question Bank Table -->
      <div class="table-container">
        <table class="category-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ký hiệu</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="category.id">
              <td>{{ index + 1 }}</td>
              <td class="category-content">{{ category.name }}</td>
              <td>
                <span class="category-description">
                  {{ category.description }}
                </span>
              </td>
              <td>
                <div class="action-buttons">Chỉnh sửa</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '@/layout/AdminLayout.vue'

//Mock data for categories
import HeadingAdmin from '@/components/HeadingAdmin.vue'
import { ref } from 'vue'

const categories = ref([
  { id: 1, name: 'NB', description: 'Câu hỏi về Nhận Biết' },
  { id: 2, name: 'TH', description: 'Câu hỏi về Thông Hiểu' },
  { id: 3, name: 'VD', description: 'Câu hỏi về Vận Dụng' },
  { id: 4, name: 'VDC', description: 'Câu hỏi về Vận Dụng Cao' },
])
</script>

<style scoped>
.category-container {
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  margin: 3px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.category-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: #fff;
}
.category-actions {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.category-table th,
.category-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.category-table th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #374151;
  white-space: nowrap;
}

.category-table tr:hover {
  background-color: #f9fafb;
}

.category-content {
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

.action-buttons {
  display: flex;
  gap: 8px;
  color: #2563eb;
  cursor: pointer;
  transition: color 0.2s;
}
.action-buttons:hover {
  color: #1d4ed8;
}
</style>
