import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model'

@Component({
  selector: 'app-dropdown-choice',
  templateUrl: './dropdown-choice.component.html',
  styleUrls: ['./dropdown-choice.component.scss']
})
export class DropdownChoiceComponent implements OnInit {
  @Input() data;

  @Output() onAnswer = new EventEmitter<number>();

  selectedAnswer: number;

  constructor() {

  }

  answerQuestion() {
    this.onAnswer.emit(this.selectedAnswer);
  }

  ngOnInit() {

  }
}
