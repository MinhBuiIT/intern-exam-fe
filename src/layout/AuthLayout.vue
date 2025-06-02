<template>
  <div class="auth-layout-container">
    <header class="auth-layout-header">
      <HeaderLogo />
      <div>
        <button class="btn-pin" @click="navigate">{{ isLogin ? 'Đăng ký' : 'Đăng nhập' }}</button>
      </div>
    </header>
    <slot></slot>
    <footer class="auth-layout-footer">
      <p>&copy; IT Group - Bui Kha Minh.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from '@/components/HeaderLogo.vue'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
  isLogin: boolean
}>()

const navigate = () => {
  if (props.isLogin) {
    router.push({ name: 'register' })
  } else {
    router.push({ name: 'login' })
  }
}
</script>

<style scoped>
.auth-layout-container {
  width: 100%;
  height: 100vh;
  background-color: #f9fafc;
}
.auth-layout-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
}
.btn-pin {
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #d1d5db;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6b7280;
  font-size: 15px;
  cursor: pointer;
}
.auth-layout-footer {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background-color: #f3f4f6;
  position: absolute;
  bottom: 0;
}
</style>
