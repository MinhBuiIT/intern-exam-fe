<template>
  <AdminLayout>
    <div class="exam-attempt-user-container">
      <div class="exam-attempt-user-score">
        <div class="circle-container">
          <div class="circle">
            <div class="circle-inner">
              <div class="percentage">90%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="exam-attempt-user-info">
        <h3 class="exam-attempt-user-info-name">Nguyễn Văn A</h3>
        <div class="exam-attempt-user-info-username">nguyenvana</div>
        <hr />
        <div class="exam-attempt-user-info-result">
          <div>
            <span class="label">Điểm</span>
            <span class="value">90</span>
          </div>
          <div>
            <span class="label">Thời gian làm bài</span>
            <span class="value">80 giây</span>
          </div>
          <div>
            <span class="label">Số câu đúng</span>
            <span class="value">10</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="exam-attempt-user-result">
      <h3>Câu trả lời người thi</h3>
      <div class="row">
        <div class="flex flex-col md6">
          <div class="item">
            <div class="exam-attempt-user-result-question">
              <h4>
                Câu 1: Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì?
              </h4>
              <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
            </div>
            <ul class="exam-attempt-user-result-answers">
              <li>
                <span>A. Giải thưởng văn học nghệ thuật</span>
              </li>
              <li>
                <span>B. Giải thưởng tiểu thuyết xuất sắc</span>
              </li>
              <li>
                <span>C. Giải thưởng Hội nhà văn Việt Nam</span>
              </li>
              <li class="pick">
                <span>D. Cả ba đáp án trên</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md6">
          <div class="item">
            <div class="exam-attempt-user-result-question">
              <h4>
                Câu 2: Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì?
              </h4>
              <VaIcon name="cancel" size="28px" color="#f44336"></VaIcon>
            </div>
            <ul class="exam-attempt-user-result-answers">
              <li>
                <span>A. Giải thưởng văn học nghệ thuật</span>
              </li>
              <li>
                <span>B. Giải thưởng tiểu thuyết xuất sắc</span>
              </li>
              <li class="pick">
                <span>C. Giải thưởng Hội nhà văn Việt Nam</span>
              </li>
              <li>
                <span>D. Cả ba đáp án trên</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md6">
          <div class="item">
            <div class="exam-attempt-user-result-question">
              <h4>
                Câu 3: Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì?
              </h4>
              <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
            </div>
            <ul class="exam-attempt-user-result-answers">
              <li>
                <span>A. Giải thưởng văn học nghệ thuật</span>
              </li>
              <li>
                <span>B. Giải thưởng tiểu thuyết xuất sắc</span>
              </li>
              <li>
                <span>C. Giải thưởng Hội nhà văn Việt Nam</span>
              </li>
              <li class="pick">
                <span>D. Cả ba đáp án trên</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md6">
          <div class="item">
            <div class="exam-attempt-user-result-question">
              <h4>
                Câu 4: Tiểu thuyết Nỗi buồn chiến tranh của Bảo Ninh được tặng giải thưởng gì?
              </h4>
              <VaIcon name="va-check-circle" size="28px" color="#65cd69"></VaIcon>
            </div>
            <ul class="exam-attempt-user-result-answers">
              <li>
                <span>A. Giải thưởng văn học nghệ thuật</span>
              </li>
              <li>
                <span>B. Giải thưởng tiểu thuyết xuất sắc</span>
              </li>
              <li>
                <span>C. Giải thưởng Hội nhà văn Việt Nam</span>
              </li>
              <li class="pick">
                <span>D. Cả ba đáp án trên</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script lang="ts" setup>
import AdminLayout from '@/layout/AdminLayout.vue'
</script>
<style scoped>
.exam-attempt-user-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.exam-attempt-user-score {
  flex: 1;
  display: flex;
  justify-content: center;
}
.exam-attempt-user-info {
  flex: 3;
  padding: 20px;
}
.circle-container {
  position: relative;
  width: 150px;
  height: 150px;
}

.circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#4caf50 0% 90%, #e0f0ef 90% 100%); /**#db3c30 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-inner {
  position: absolute;
  width: 110px;
  height: 110px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

.percentage {
  font-size: 24px;
  font-weight: bold;
  color: #4caf50;
}
.exam-attempt-user-info-name {
  font-size: 24px;
  font-weight: bold;
  color: #111827;
}
.exam-attempt-user-info-username {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 10px;
  margin-top: 8px;
}
.exam-attempt-user-info-result {
  display: flex;
  margin-top: 20px;
  gap: 30px;
}
.exam-attempt-user-info-result div {
  text-align: center;
}
.label {
  font-weight: bold;
  color: #374151;
}
.value {
  font-size: 18px;
  color: #111827;
  margin-left: 12px;
}
.exam-attempt-user-info hr {
  margin: 20px 0;
  border: none;
  border-top: 1px solid #e5e7eb;
}
.exam-attempt-user-result {
  margin-top: 40px;
  padding: 20px;
}
.exam-attempt-user-result h3 {
  font-size: 24px;
  color: #111827;
}
.exam-attempt-user-result .item {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  margin-top: 30px;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.exam-attempt-user-result-question {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 20px;
}
.exam-attempt-user-result-question h4 {
  font-size: 18px;
  color: #111827;
  margin-bottom: 10px;
  line-height: 1.6;
}
.exam-attempt-user-result-answers {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.exam-attempt-user-result-answers li {
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 16px;
}
.exam-attempt-user-result-answers li.pick {
  border: 1px solid #2196f3;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
