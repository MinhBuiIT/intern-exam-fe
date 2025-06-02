<template>
  <div class="logo">
    <span class="line"></span>
    <span class="line"></span>
    <span class="logo-content">Exam</span>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.logo {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo .line {
  width: 60px;
  height: 4px;
  margin: 1px 0;
}
.logo span:nth-child(1) {
  background-color: #6c63ff;
}
.logo span:nth-child(2) {
  background-color: rgba(82, 254, 244, 1);
}
.logo .logo-content {
  color: #6c63ff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 4px;
}
</style>
