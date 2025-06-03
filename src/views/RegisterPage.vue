<template>
  <AuthLayout :isLogin="false">
    <main class="register-main">
      <div class="register-form">
        <h1 class="welcome-message">Nền tảng thi online thông minh – bắt đầu bằng một cú click!</h1>
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
            type="text"
            label="Tên đầy đủ"
            v-model="formData.password"
            :error="Boolean(passwordError)"
            :error-messages="passwordError"
            immediateValidation
          />
          <VaInput
            label="Tên đăng nhập"
            class="mt-3"
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
          <VaRadio
            v-model="formData.gender"
            :options="[
              {
                text: 'Nam',
                value: true,
              },
              {
                text: 'Nữ',
                value: false,
              },
            ]"
            value-by="value"
            class="mt-3"
          />
          <div class="mt-3">
            <VaButton type="submit"> Đăng ký </VaButton>
          </div>
        </VaForm>
      </div>
      <div>
        <img src="../assets/study-img.png" alt="register Illustration" class="register-img" />
      </div>
    </main>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layout/AuthLayout.vue'
import { reactive, ref } from 'vue'

interface FormData {
  fullName: string
  username: string
  password: string
  gender: boolean
}

const formData: FormData = reactive({
  fullName: '',
  username: '',
  password: '',
  gender: true, // true for male, false for female
})

const usernameError = ref<string>('')
const passwordError = ref<string>('')
const fullNameError = ref<string>('')

const handleSubmit = () => {
  const { username, password, fullName } = formData

  if (!fullName) {
    fullNameError.value = 'Tên đầy đủ không được để trống'
    return
  } else {
    fullNameError.value = ''
  }
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
.register-page {
  width: 100%;
  height: 100vh;
  background-color: #f9fafc;
}
.register-header {
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
.register-main {
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
.register-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s ease-in;
}
.register-img {
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
