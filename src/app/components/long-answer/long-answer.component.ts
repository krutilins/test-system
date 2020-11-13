import { Component, Input, OnInit } from '@angular/core'
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model'

@Component({
  selector: 'app-long-answer',
  templateUrl: './long-answer.component.html',
  styleUrls: ['./long-answer.component.scss']
})
export class LongAnswerComponent implements OnInit {
  @Input('data') quizQuestion

  constructor() {

  }

  ngOnInit() {

  }
}
