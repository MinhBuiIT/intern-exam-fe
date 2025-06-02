<template>
  <AuthLayout :isLogin="true">
    <main class="login-main">
      <div class="login-form">
        <h1 class="welcome-message">Chào mừng các bạn đến với Online Exam</h1>
        <VaForm
          :style="{
            width: '60%',
            margin: '0 auto',
            display: 'flex',
            'flex-direction': 'column',
          }"
          tag="form"
          @submit.prevent="handleSubmit"
        >
          <VaInput
            label="Tên đăng nhập"
            v-model="formData.username"
            :error="Boolean(usernameError)"
            :error-messages="usernameError"
            immediateValidation
          />

          <VaInput
            type="password"
            label="Mật khẩu"
            class="mt-3"
            v-model="formData.password"
            :error="Boolean(passwordError)"
            :error-messages="passwordError"
            immediateValidation
          />
          <div class="mt-3">
            <VaButton type="submit"> Đăng Nhập </VaButton>
          </div>
        </VaForm>
      </div>
      <div>
        <img src="../assets/study-img.png" alt="Login Illustration" class="login-img" />
      </div>
    </main>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue'
import { reactive, ref } from 'vue'

interface FormData {
  username: string
  password: string
}

const formData: FormData = reactive({
  username: '',
  password: '',
})

const usernameError = ref<string>('')
const passwordError = ref<string>('')

const handleSubmit = () => {
  const { username, password } = formData
  if (!username) {
    usernameError.value = 'Tên đăng nhập không được để trống'
    return
  } else {
    usernameError.value = ''
  }
  if (!password) {
    passwordError.value = 'Mật khẩu không được để trống'
    return
  } else if (password.length < 6) {
    passwordError.value = 'Mật khẩu phải có ít nhất 6 ký tự'
    return
  } else {
    passwordError.value = ''
  }
  // Handle form submission logic here
  console.log('Form submitted:', { username, password })
}
</script>
<style scoped>
.login-page {
  width: 100%;
  height: 100vh;
  background-color: #f9fafc;
}
.login-header {
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
}
.login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.welcome-message {
  font-size: 32px;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 40px;
}
.login-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s ease-in;
}
.login-img {
  width: 400px;
  height: 400px;
  animation: fadeIn 1s ease-in;
  margin-left: 50px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
