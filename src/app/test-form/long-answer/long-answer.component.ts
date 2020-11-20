import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { LongAnswer } from 'src/app/models/long-answer.model';
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model'

@Component({
  selector: 'app-long-answer',
  templateUrl: './long-answer.component.html',
  styleUrls: ['./long-answer.component.scss']
})
export class LongAnswerComponent implements OnInit {
  @Input() data: QuizQuestion<LongAnswer>;

  @Output() onAnswer = new EventEmitter();

  answer: string

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
