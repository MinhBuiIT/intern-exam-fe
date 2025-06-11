<template>
  <AdminLayout>
    <div class="admin-exam-user">
      <HeadingAdmin>Quản lý người thi bài thi</HeadingAdmin>
      <div class="exam-user-summary">
        <h3>Tiêu đề bài kiểm tra</h3>
      </div>
      <div class="exam-user-info">
        <div>Số người tham gia: <strong>20</strong></div>
        <div>Số lượt thi: <strong>50</strong></div>
      </div>
      <div class="exam-user-info">
        <div>Số lượt thi đậu: <strong>24</strong></div>
        <div>Số lượt thi rớt: <strong>26</strong></div>
      </div>
      <hr />
      <div>
        <h3 class="exam-user-heading">Danh sách người thi</h3>
        <div class="table-container">
          <table class="exam-user-table">
            <thead>
              <tr>
                <th style="width: 5%">STT</th>
                <th style="width: 25%">Họ tên đầy đủ</th>
                <th style="width: 25%">Username</th>
                <th style="width: 25%">Giới tính</th>
                <th style="width: 25%">Trạng thái</th>
                <th style="width: 15%"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in userList" :key="user.id">
                <td>{{ index + 1 }}</td>
                <td>{{ user.fullName }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.gender ? 'Nam' : 'Nữ' }}</td>
                <td>
                  <span :class="getStatusClass(user.status)">
                    {{ getStatusText(user.status) }}
                  </span>
                </td>
                <td>
                  <div class="action-buttons">
                    <button class="action-btn view-btn" @click="navigateToUserDetailExam(10)">
                      <VaIcon name="visibility" color="#1d4ed8" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
<script setup lang="ts">
import HeadingAdmin from '@/components/HeadingAdmin.vue'
import AdminLayout from '@/layout/AdminLayout.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userList = ref([
  { id: 1, fullName: 'Nguyễn Văn A', username: 'nguyenvana', gender: true, status: 'completed' },
  { id: 2, fullName: 'Trần Thị B', username: 'tranthib', gender: false, status: 'completed' },
  { id: 3, fullName: 'Lê Văn C', username: 'levanc', gender: true, status: 'in_progress' },
  { id: 4, fullName: 'Phạm Thị D', username: 'phamthid', gender: false, status: 'not_taken' },
  { id: 5, fullName: 'Hoàng Văn E', username: 'hoangvane', gender: true, status: 'not_taken' },
  { id: 6, fullName: 'Vũ Thị F', username: 'vuthif', gender: false, status: 'in_progress' },
  { id: 7, fullName: 'Đặng Văn G', username: 'dangvang', gender: false, status: 'not_taken' },
  { id: 8, fullName: 'Mai Thị H', username: 'maithih', gender: true, status: 'cancelled' },
  { id: 9, fullName: 'Bùi Văn I', username: 'buivani', gender: false, status: 'cancelled' },
  { id: 10, fullName: 'Lý Thị K', username: 'lythik', gender: true, status: 'not_taken' },
])
const getStatusText = (status: string) => {
  switch (status) {
    case 'not_taken':
      return 'Chưa thi'
    case 'in_progress':
      return 'Đang thi'
    case 'cancelled':
      return 'Đã hủy'
    case 'completed':
      return 'Đã thi'
    default:
      return 'Không xác định'
  }
}

const getStatusClass = (status: string) => {
  return {
    'status-tag': true,
    'status-not-taken': status === 'not_taken',
    'status-in-progress': status === 'in_progress',
    'status-cancelled': status === 'cancelled',
    'status-completed': status === 'completed',
  }
}

//router.currentRoute.value.params.examId
const navigateToUserDetailExam = (userId: number) => {
  router.push({ name: 'user-exam-detail', params: { userId, examId: 33 } })
  // Navigate to user management page
  console.log('Navigating to user management page')
}
</script>

<style scoped>
.admin-exam-user {
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  position: relative;
}
.exam-user-summary {
  margin-top: 20px;
  text-align: center;
}
.exam-user-summary h3 {
  font-size: 24px;
  color: #111827;
}
.exam-user-info {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #374151;
  max-width: 80%;
  margin: 20px auto;
}
.exam-user-info div {
  flex: 1;
  text-align: center;
}
.exam-user-info strong {
  color: #111827;
}
/* Table Styles */
.exam-user-heading {
  font-size: 20px;
  color: #111827;
  margin-bottom: 15px;
  text-align: center;
  margin: 20px 0;
}
.table-container {
  max-height: 500px;
  overflow-y: auto;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.exam-user-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.exam-user-table thead {
  position: sticky;
  top: 0;
  z-index: 10;
}

.exam-user-table th {
  background-color: #f9fafb;
  padding: 12px 16px;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.exam-user-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
}

.exam-user-table tr:hover {
  background-color: #f9fafb;
}

/* Status Tags */
.status-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
}

.status-not-taken {
  background-color: #e5e7eb;
  color: #4b5563;
}
.status-in-progress {
  background-color: #bfdbfe;
  color: #1d4ed8;
}
.status-cancelled {
  background-color: #fee2e2;
  color: #dc2626;
}
.status-completed {
  background-color: #d1fae5;
  color: #065f46;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.action-btn {
  border: none;
  background: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.view-btn:hover {
  background-color: #e6f7ff;
  color: #0085ff;
}
</style>
