import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import { MultipleChoice } from 'src/app/models/multiple-choice.model'
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model'

interface Option {
  text: string;
  checked: boolean;
}
@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
  @Input('data') quizQuestion: QuizQuestion<MultipleChoice>

  @Output() onAnswer = new EventEmitter()

  options: Option[] = []

  constructor() {

  }

  answerQuestion() {
    this.onAnswer.emit(this.options.filter(item => item.checked))
  }

  ngOnInit() {
    this.quizQuestion.data.options.forEach((item) => {
      this.options.push({
        text: item,
        checked: false
      })
    }, this);
  }
}
