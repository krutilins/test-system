import { QuestionType } from './question-type.model';

export interface QuizQuestion<T = unknown> {
  type: QuestionType
  id: string
  data: T
}
