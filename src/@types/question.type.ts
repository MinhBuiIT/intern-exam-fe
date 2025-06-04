export interface IQuestionItem {
  content: string
  category: string
  createdAt: string
  explain: string
  answers: { id: number; content: string; isCorrect: boolean }[]
}
