import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model';
import { SingleChoice } from 'src/app/models/single-choice.model';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
  @Input() data: SingleChoice;


  @Output() onAnswer = new EventEmitter();

  selectedAnswer: string = '';

  constructor() {
  }

  answerQuestion() {
    this.onAnswer.emit({
      question: this.data.question,
      answer: this.selectedAnswer
    });
  }

  ngOnInit() {

  }
}
