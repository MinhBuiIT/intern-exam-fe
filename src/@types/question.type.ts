export interface IQuestionItem {
  content: string
  category: string
  createdAt: string
  explain: string
  answers: { id: number; content: string; isCorrect: boolean }[]
}

export interface IQuestionItemImport {
  text: string
  category: string
  explain: string
  type: 'SINGLE' | 'MULTIPLE'
  answers: { content: string; isCorrect: boolean }[]
  isPick: boolean
}

export interface IQuestionFormatExecl {
  Content: string
  Category: string
  Explain: string
  'Option A': string
  'Option B': string
  'Option C'?: string
  'Option D'?: string
  'Option E'?: string
  'Correct Answer': string
}

export interface IPickQuestion {
  id: number
  text: string
  category: string
  createdAt: string
  pick: boolean
  type: 'SINGLE' | 'MULTIPLE'
  explain: string
}
