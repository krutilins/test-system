import { Component, Input, OnInit } from '@angular/core'
import { QuestionType } from 'src/app/models/question-type.model';
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model';
import { QUIZ_QUESTIONS } from './test-form.config';


@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  @Input() quizQuestions: QuizQuestion[]
  questionType = QuestionType

  constructor() {
    this.quizQuestions = QUIZ_QUESTIONS;
  }

  ngOnInit() {

  }

  updateAnswers($event) {

  }
}
