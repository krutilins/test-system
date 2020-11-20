import { Data } from '@angular/router';
import { QuizAnswer } from './quiz-answer.model';

export interface TestResult {
  id: string,
  title: string,
  sections: [
    {
      title: string,
      subtitle: string,
      quizAnswers: QuizAnswer[]
    }
  ]
}
