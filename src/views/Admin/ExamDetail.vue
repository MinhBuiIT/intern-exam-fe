<template>
  <AdminLayout>
    <div class="admin-exam-detail">
      <HeadingAdmin>Chi tiết bài kiểm tra</HeadingAdmin>
      <div class="exam-detail-content">
        <h3>Tiêu đề bài kiểm tra</h3>
        <p>
          Mô tả bài kiểm tra: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, id
          voluptatum adipisci excepturi aspernatur dolores suscipit.
        </p>
      </div>
      <div class="exam-detail-info">
        <div>Ngày bắt đầu: <strong>01/01/2025</strong></div>
        <div>Ngày kết thúc: <strong>31/01/2025</strong></div>
      </div>
      <div class="exam-detail-info">
        <div>Tổng số điểm: <strong>100</strong></div>
        <div>Thời gian làm bài: <strong>80s</strong></div>
      </div>
      <div class="exam-detail-info">
        <div>Tổng số câu hỏi: <strong>100</strong></div>
        <div>Trạng thái: <VaBadge text="Active" color="success" class="mr-2" /></div>
      </div>
      <hr />
      <div class="exam-detail-list">
        <h3 class="exam-detail-heading">Danh sách các câu hỏi</h3>
        <div class="exam-detail-box">
          <h4 class="exam-detail-question">
            Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì
          </h4>
          <div class="exam-detail-answer correct">
            <span>Giải thưởng văn học nghệ thuật</span>
            <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng tiểu thuyết xuất sắc</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng Hội nhà văn Việt Nam</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Cả ba đáp án trên</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
        </div>
        <div class="exam-detail-box">
          <h4 class="exam-detail-question">
            Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì
          </h4>
          <div class="exam-detail-answer correct">
            <span>Giải thưởng văn học nghệ thuật</span>
            <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng tiểu thuyết xuất sắc</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng Hội nhà văn Việt Nam</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Cả ba đáp án trên</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
        </div>
        <div class="exam-detail-box">
          <h4 class="exam-detail-question">
            Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì
          </h4>
          <div class="exam-detail-answer correct">
            <span>Giải thưởng văn học nghệ thuật</span>
            <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng tiểu thuyết xuất sắc</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng Hội nhà văn Việt Nam</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Cả ba đáp án trên</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
        </div>
        <div class="exam-detail-box">
          <h4 class="exam-detail-question">
            Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì
          </h4>
          <div class="exam-detail-answer correct">
            <span>Giải thưởng văn học nghệ thuật</span>
            <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng tiểu thuyết xuất sắc</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng Hội nhà văn Việt Nam</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Cả ba đáp án trên</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
        </div>
        <div class="exam-detail-box">
          <h4 class="exam-detail-question">
            Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì
          </h4>
          <div class="exam-detail-answer correct">
            <span>Giải thưởng văn học nghệ thuật</span>
            <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng tiểu thuyết xuất sắc</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng Hội nhà văn Việt Nam</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Cả ba đáp án trên</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
        </div>
        <div class="exam-detail-box">
          <h4 class="exam-detail-question">
            Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì
          </h4>
          <div class="exam-detail-answer correct">
            <span>Giải thưởng văn học nghệ thuật</span>
            <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng tiểu thuyết xuất sắc</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Giải thưởng Hội nhà văn Việt Nam</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
          </div>
          <div class="exam-detail-answer incorrect">
            <span>Cả ba đáp án trên</span>
            <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
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

console.log('Exam Id', router.currentRoute.value.params.examId)
</script>
<style scoped>
.admin-exam-detail {
  width: 100%;
  padding: 20px 30px;
  background-color: white;
  margin: 3px 0;
  position: relative;
}
.exam-detail-content {
  margin-top: 20px;
  text-align: center;
}
.exam-detail-content h3 {
  font-size: 24px;
  color: #111827;
}
.exam-detail-content p {
  font-size: 16px;
  color: #6b7280;
  margin-top: 10px;
}
.exam-detail-info {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #374151;
  max-width: 80%;
  margin: 20px auto;
}
.exam-detail-info div {
  flex: 1;
  text-align: center;
}
.exam-detail-heading {
  font-size: 20px;
  color: #111827;
  margin-bottom: 15px;
  text-align: center;
}
.exam-detail-list {
  margin-top: 20px;
  max-width: 80%;
  margin: 20px auto;
}
.exam-detail-box {
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
.exam-detail-question {
  font-size: 18px;
  color: #111827;
  margin-bottom: 10px;
}
.exam-detail-answer {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #374151;
  /* background-color: #f3f4f6; */

  border-radius: 8px;
  padding: 10px 14px;
  justify-content: space-between;
  margin-top: 10px;
}
.exam-detail-answer.correct {
  background-color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid #65cd69;
}
.exam-detail-answer.incorrect {
  background-color: #f3f4f6;
}
</style>
