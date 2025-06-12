<template>
  <AdminLayout>
    <div class="admin-exam-detail">
      <HeadingAdmin>Thống kê kết quả</HeadingAdmin>
      <div class="exam-sumary-container">
        <h3 class="exam-sumary-info">Thông tin</h3>
        <div class="exam-sumary-row">
          <!-- <div class="exam-sumary-content">
            <div>Họ tên: <strong>Nguyễn Văn A</strong></div>
            <div>Tên đăng nhập: <strong>nguyenvana</strong></div>
            <div>Giới tính: <strong>Nam</strong></div>
          </div> -->
          <div class="exam-sumary-col">
            <div :style="{ 'text-align': 'center' }">Họ tên: <strong>Nguyễn Văn A</strong></div>
            <div class="exam-sumary-box-card">
              <div class="exam-sumary-box-card-icon info">Icon</div>
              <div class="exam-sumary-box-card-text">
                <span>Số lần thi</span>
                <strong>10</strong>
              </div>
            </div>
          </div>
          <div class="exam-sumary-col">
            <div :style="{ 'text-align': 'center' }">Họ tên: <strong>Nguyễn Văn A</strong></div>
            <div class="exam-sumary-box-card">
              <div class="exam-sumary-box-card-icon success">Icon</div>
              <div class="exam-sumary-box-card-text">
                <span>Số lần thi đậu</span>
                <strong>10</strong>
              </div>
            </div>
          </div>
          <div class="exam-sumary-col">
            <div :style="{ 'text-align': 'center' }">Họ tên: <strong>Nguyễn Văn A</strong></div>
            <div class="exam-sumary-box-card">
              <div class="exam-sumary-box-card-icon error">Icon</div>
              <div class="exam-sumary-box-card-text">
                <span>Số lần thi rớt</span>
                <strong>10</strong>
              </div>
            </div>
          </div>
          <!-- <div class="exam-sumary-box">
            <div class="exam-sumary-box-card">
              <div class="exam-sumary-box-card-icon">Icon</div>
              <div class="exam-sumary-box-card-text">
                <span>Số lần thi</span>
                <strong>10</strong>
              </div>
            </div>
            <div class="exam-sumary-box-card">
              <div class="exam-sumary-box-card-icon">Icon</div>
              <div class="exam-sumary-box-card-text">
                <span>Số lần thi đậu</span>
                <strong>8</strong>
              </div>
            </div>
            <div class="exam-sumary-box-card">
              <div class="exam-sumary-box-card-icon">Icon</div>
              <div class="exam-sumary-box-card-text">
                <span>Số lần thi rớt</span>
                <strong>2</strong>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <hr />
      <div class="exam-sumary-attempts">
        <h3 class="exam-sumary-info">Các lần thi</h3>
        <div class="exam-sumary-box">
          <div>Thời gian làm bài: <strong>80 giây</strong></div>
          <div>Tổng số điểm: <strong>100</strong></div>
          <div>Tổng số câu: <strong>10</strong></div>
        </div>
        <div class="table-container">
          <table class="exam-sumary-attempts-table">
            <thead>
              <tr>
                <th style="width: 5%">Lần thi</th>
                <th style="width: 25%">Thời gian thi</th>
                <th style="width: 25%">Số điểm</th>
                <th style="width: 25%">Kết quả</th>
                <th style="width: 15%"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(attempt, index) in attempts" :key="attempt.id">
                <td>{{ index + 1 }}</td>
                <td>{{ attempt.time }}</td>
                <td>{{ attempt.score }}</td>
                <td>{{ attempt.result }}</td>

                <td>
                  <div class="action-buttons">
                    <button class="action-btn view-btn" @click="navigateExamAttemptResult(10)">
                      Xem chi tiết
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

const router = useRouter()
//mock data for user attempts
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const attempts = ref([
  { id: 1, time: '2023-10-01 10:00', score: 85, result: 'Passed' },
  { id: 2, time: '2023-10-02 11:00', score: 90, result: 'Passed' },
  { id: 3, time: '2023-10-03 12:00', score: 75, result: 'Failed' },
  { id: 4, time: '2023-10-04 13:00', score: 80, result: 'Passed' },
  { id: 5, time: '2023-10-05 14:00', score: 70, result: 'Failed' },
  { id: 6, time: '2023-10-06 15:00', score: 95, result: 'Passed' },
  { id: 7, time: '2023-10-07 16:00', score: 88, result: 'Passed' },
])

const navigateExamAttemptResult = (resultId: number) => {
  router.push({
    name: 'exam-result',
    params: { resultId: resultId },
  })
  // Navigate to the exam attempt detail page
  // This is a placeholder function, implement your navigation logic here
  console.log('Navigate to exam attempt detail for ID:', resultId)
}
</script>

<style scoped>
.admin-exam-detail {
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  position: relative;
}
.exam-sumary-container {
  margin-top: 20px;
}
.exam-sumary-info {
  font-size: 24px;
  color: #111827;
  text-align: center;
}
.exam-sumary-row {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.exam-sumary-col {
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.exam-sumary-content div {
  text-align: center;
  font-size: 16px;
  color: #374151;
}
.exam-sumary-box-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 100px;
  border: 1px solid #e5e7eb;
}
.exam-sumary-box-card-icon {
  width: 60px;
  height: 60px;
  background-color: rgba(230, 241, 255, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
}
.exam-sumary-box-card-icon.info {
  background-color: rgba(230, 241, 255, 1);
}
.exam-sumary-box-card-icon.success {
  background-color: rgba(239, 246, 232, 1);
}
.exam-sumary-box-card-icon.error {
  background-color: rgba(254, 242, 242, 1);
}
.exam-sumary-box-card-text {
  display: flex;
  flex-direction: column;
}
.exam-sumary-box-card-text span {
  font-size: 14px;
  color: #6b7280;
}
.exam-sumary-box-card-text strong {
  font-size: 24px;
  color: #111827;
}
.exam-sumary-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 14px 0;
}
.exam-sumary-box strong {
  color: #111827;
}
.exam-sumary-box hr {
  margin: 20px 0;
}
.exam-sumary-attempts {
  margin-top: 50px;
}
.table-container {
  max-height: 500px;
  overflow-y: auto;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
.exam-sumary-attempts-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.exam-sumary-attempts-table thead {
  position: sticky;
  top: 0;
  z-index: 10;
}

.exam-sumary-attempts-table th {
  background-color: #f9fafb;
  padding: 12px 16px;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.exam-sumary-attempts-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
}

.exam-sumary-attempts-table tr:hover {
  background-color: #f9fafb;
}
.action-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.action-btn {
  border: none;
  background: none;
  cursor: pointer;
  width: fit-content;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0085ff;
  transition: all 0.2s ease;
}
</style>
