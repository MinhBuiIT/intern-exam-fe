<template>
  <UserLayout>
    <template v-slot:info>
      <div class="user-layout-header-info">Chào mừng, <strong>Nguyễn Văn A</strong></div>
    </template>
    <template v-slot:content>
      <h3 class="user-exam-heading">Danh sách bài thi của bạn</h3>
      <div class="user-exam-list">
        <div class="user-exam-item">
          <h4>Tiêu đề bài kiểm tra</h4>
          <p>Số câu hỏi: 10</p>
          <p>Thời gian làm bài: 60 phút</p>
          <button class="btn btn-primary">Xem chi tiết</button>
        </div>
        <!-- Add more exam items as needed -->
      </div>
    </template>
  </UserLayout>
</template>

<script setup lang="ts">
import UserLayout from '@/layout/UserLayout.vue'
</script>
