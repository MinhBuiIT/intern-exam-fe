<template>
  <AdminLayout>
    <div class="exam-container">
      <HeadingAdmin>
        <span>Danh sách các bài kiểm tra</span>
      </HeadingAdmin>
      <VaButton color="primary" gradient class="btn-add-exam" @click="navigateToAddExam"
        >+ Thêm bài Kiểm Tra
      </VaButton>

      <div :style="{ height: 'calc(100vh - 80px)', 'margin-top': '40px' }" class="overflow-auto">
        <div>
          <div class="row">
            <div class="flex flex-col md3">
              <div class="item">
                <div class="exam-img">
                  <img src="../../assets/note-img.png" alt="Note Image" />
                </div>
                <h4 class="exam-title">Bài Kiểm Tra Toán Học</h4>
                <p class="exam-description">Đây là bài kiểm tra 15</p>
                <div class="exam-details">
                  <p>Thời gian làm bài: 60 phút</p>
                  <p>Hết hạn: 10:00 15/06/2025</p>
                </div>
                <VaButton color="info" gradient class="exam-btn"> Xem chi tiết </VaButton>
              </div>
            </div>
            <div class="flex flex-col md3">
              <div class="item">
                <div class="exam-img">
                  <img src="../../assets/note-img.png" alt="Note Image" />
                </div>
                <h4 class="exam-title">Bài Kiểm Tra Ngữ Văn</h4>
                <p class="exam-description">Đây là bài kiểm tra giữa kỳ</p>
                <div class="exam-details">
                  <p>Thời gian làm bài: 60 phút</p>
                  <p>Hết hạn: 10:00 19/06/2025</p>
                </div>
                <VaButton color="info" gradient class="exam-btn"> Xem chi tiết </VaButton>
              </div>
            </div>
            <div class="flex flex-col md3">
              <div class="item">
                <div class="exam-img">
                  <img src="../../assets/note-img.png" alt="Note Image" />
                </div>
                <h4 class="exam-title">Bài Kiểm Tra Sinh Học</h4>
                <p class="exam-description">Đây là bài kiểm tra giữa kỳ</p>
                <div class="exam-details">
                  <p>Thời gian làm bài: 60 phút</p>
                  <p>Hết hạn: 10:00 19/06/2025</p>
                </div>
                <VaButton color="info" gradient class="exam-btn"> Xem chi tiết </VaButton>
              </div>
            </div>
            <div class="flex flex-col md3">
              <div class="item">
                <div class="exam-img">
                  <img src="../../assets/note-img.png" alt="Note Image" />
                </div>
                <h4 class="exam-title">Bài Kiểm Tra Sinh Học</h4>
                <p class="exam-description">Đây là bài kiểm tra giữa kỳ</p>
                <div class="exam-details">
                  <p>Thời gian làm bài: 60 phút</p>
                  <p>Hết hạn: 10:00 19/06/2025</p>
                </div>
                <VaButton color="info" gradient class="exam-btn"> Xem chi tiết </VaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import HeadingAdmin from '@/components/HeadingAdmin.vue'
import AdminLayout from '@/layout/AdminLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navigateToAddExam = () => {
  router.push({ name: 'add-exam' })
}
</script>
<style lang="scss" scoped>
@import 'vuestic-ui/styles/grid';
.exam-container {
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  margin: 3px 0;
  position: relative;
}
.btn-add-exam {
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 10;
  color: #fff;
}
.item {
  width: 92%;
  min-height: 240px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #111827;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.exam-img {
  width: 60px;
  height: 60px;
}
.exam-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.exam-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-top: 10px;
}
.exam-description {
  font-size: 14px;
  color: #6b7280;
  margin-top: 10px;
}
.exam-details {
  width: 100%;
  font-size: 14px;
  color: #6b7280;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.exam-details p {
  margin: 0;
  text-align: center;
}
.exam-btn {
  margin-top: 20px;
}
</style>
