import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
  @Input() data


  @Output() onAnswer = new EventEmitter();

  selectedAnswer: string = '';

  constructor() {
  }

  answerQuestion() {
    this.onAnswer.emit({
      question: this.data,
      answer: this.selectedAnswer
    });
  }

  ngOnInit() {

  }
}
