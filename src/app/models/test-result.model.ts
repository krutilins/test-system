import { Data } from '@angular/router';
import { QuizAnswer } from './quiz-answer.model';

interface ResultSection {
  title: string;
  subtitle: string;
  quizAnswers: QuizAnswer[];
}
export interface TestResult {
  id: string;
  title: string;
  sections: ResultSection[];
}
