import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
  @Input('data') quizQuestion


  @Output() onAnswer = new EventEmitter<string>();

  selectedAnswer: string = '';

  constructor() {
  }

  answerQuestion() {
    this.onAnswer.emit(this.selectedAnswer);
  }

  ngOnInit() {

  }
}
