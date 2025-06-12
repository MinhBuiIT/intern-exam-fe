<template>
  <div>
    <header class="user-layout-header">
      <div class="user-layout-header-left">
        <HeaderLogo />
        <div class="user-layout-header-menu">
          <ul>
            <li
              v-for="item in items"
              :key="item.name"
              :class="{ active: item.active }"
              @click="navigateTo(item.name)"
            >
              {{ item.title }}
            </li>
            <li @click="navigateTo('logout')">
              <i class="icon-logout"></i>
              Đăng Xuất
            </li>
          </ul>
        </div>
      </div>
      <div>
        <slot name="info"></slot>
      </div>
    </header>

    <div class="user-layout-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderLogo from '@/components/HeaderLogo.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
console.log('router', router.currentRoute.value.name)

const items = reactive([
  {
    title: 'Bài Thi',
    name: 'user-exams',
    active: router.currentRoute.value.name === 'user-exams',
  },
  {
    title: 'Lịch Sử',
    name: 'user-exam-history',
    active: router.currentRoute.value.name === 'user-exam-history',
  },
])

const navigateTo = (name: string) => {
  router.push({ name })
}
</script>
<style>
.user-layout-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #f9fafc;
  height: 8vh;
  padding: 0 60px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.user-layout-header-left {
  display: flex;
  align-items: center;
}
.user-layout-content {
  width: 100%;
  height: calc(100vh - 8vh);
  padding: 20px;
  background-color: #fff;
  margin-top: 8vh;
}
.user-layout-header-menu {
  display: flex;
  align-items: center;
}
.user-layout-header-menu ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.user-layout-header-menu li {
  margin: 0 15px;
  cursor: pointer;
  color: #374151;
  font-weight: 500;
}
.user-layout-header-menu li.active {
  color: #6c63ff;
  font-weight: 600;
}
</style>
