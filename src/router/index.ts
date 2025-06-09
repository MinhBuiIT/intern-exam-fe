import AddExam from '@/views/Admin/AddExam.vue'
import ExamDetail from '@/views/Admin/ExamDetail.vue'
import ExamManagement from '@/views/Admin/ExamManagement.vue'
import AdminQuestionsPage from '@/views/Admin/QuestionBank.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/admin/questions',
      name: 'admin-questions',
      component: AdminQuestionsPage,
    },
    {
      path: '/admin/exams',
      name: 'exam-management',
      component: ExamManagement,
    },
    {
      path: '/admin/exams/add',
      name: 'add-exam',
      component: AddExam,
    },
    {
      path: '/admin/exams/:examId',
      name: 'exam-detail',
      component: ExamDetail,
    },
  ],
})

export default router
