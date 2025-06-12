import AddExam from '@/views/Admin/AddExam.vue'
import ExamDetail from '@/views/Admin/ExamDetail.vue'
import ExamManagement from '@/views/Admin/ExamManagement.vue'
import AdminQuestionsPage from '@/views/Admin/QuestionBank.vue'
import QuestionCategory from '@/views/Admin/QuestionCategory.vue'
import UserExamAttempDetail from '@/views/Admin/UserExamAttempDetail.vue'
import UserExamDetail from '@/views/Admin/UserExamDetail.vue'
import UserExamManagement from '@/views/Admin/UserExamManagement.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import MyExam from '@/views/User/MyExam.vue'
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
    {
      path: '/admin/exams/:examId/users',
      name: 'exam-users',
      component: UserExamManagement,
    },
    {
      path: '/admin/exams/:examId/users/:userId',
      name: 'user-exam-detail',
      component: UserExamDetail,
    },
    {
      path: '/admin/exams/result/:resultId',
      name: 'exam-result',
      component: UserExamAttempDetail,
    },
    {
      path: '/admin/categories',
      name: 'question-type-management',
      component: QuestionCategory,
    },
    {
      path: '/user/exams',
      name: 'user-exams',
      component: MyExam,
    },
  ],
})

export default router
