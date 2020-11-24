import { QuizQuestion } from './quiz-quesiton.model';

export interface FormSection {
  sectionTitle: string;
  sectionSubtitle: string;
  questionList: QuizQuestion[];
}
