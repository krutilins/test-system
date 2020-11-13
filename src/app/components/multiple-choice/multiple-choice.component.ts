import {Component, Input, OnInit} from '@angular/core'
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model'

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
  @Input('data') quizQuestion

  constructor() {

  }

  ngOnInit() {

  }
}
