export interface IQuestionItem {
  content: string
  category: string
  createdAt: string
  answers: { id: number; content: string; isCorrect: boolean }[]
}
