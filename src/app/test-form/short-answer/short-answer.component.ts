import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model'
import { ShortAnswer } from 'src/app/models/short-answer.model'

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.scss']
})
export class ShortAnswerComponent implements OnInit {
  @Input() data: QuizQuestion<ShortAnswer>;

  @Output() onAnswer = new EventEmitter();

  answer: string = '';

  constructor() {

  }

  answerQuestion() {
    this.onAnswer.emit({
      question: this.data,
      answer: this.answer
    });
  }

  ngOnInit() {

  }
}
