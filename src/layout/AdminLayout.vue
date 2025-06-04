<template>
  <div>
    <header class="admin-layout-header">
      <HeaderLogo />
      <div>
        <h3 class="admin-layout-heading3">Admin</h3>
        <p>@admin</p>
      </div>
    </header>
    <div :style="{ display: 'flex', height: '92vh' }">
      <div>
        <VaSidebar
          color="#fff"
          :style="{ 'box-shadow': '2px 6px 4px rgba(0, 0, 0, 0.08)' }"
          active-color="primary"
        >
          <VaSidebarItem v-for="(item, index) in items" :key="index" :active="item.active">
            <VaSidebarItemContent @click="navigateTo(item.name)">
              <VaIcon :name="item.icon" />
              <VaSidebarItemTitle>{{ item.title }}</VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>

          <VaSpacer />

          <VaSidebarItem>
            <VaSidebarItemContent>
              <VaIcon name="logout" />
              <VaSidebarItemTitle>Đăng Xuất</VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </VaSidebar>
      </div>

      <slot></slot>
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
    title: 'Quản lý ngân hàng câu hỏi',
    icon: 'home',
    name: 'admin-questions',
    active: router.currentRoute.value.name === 'admin-questions',
  },
  {
    title: 'Quản lý bài thi',
    icon: 'school',
    name: 'exam-management',
    active: router.currentRoute.value.name === 'exam-management',
  },
  {
    title: 'Quản lý loại câu hỏi',
    icon: 'star',
    name: 'question-type-management',
    active: router.currentRoute.value.name === 'question-type-management',
  },
])

const navigateTo = (name: string) => {
  router.push({ name })
}
</script>
<style scoped>
.admin-layout-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #f9fafc;
  height: 8vh;
  padding: 0 60px;
  box-shadow: 2px 6px 4px rgba(0, 0, 0, 0.08);
  z-index: 1000;
}
.admin-layout-heading3 {
  font-size: 24px;
  color: #111827;
  margin: 0;
}
.admin-layout-header p {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
}
</style>
