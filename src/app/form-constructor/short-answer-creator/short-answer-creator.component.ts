import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShortAnswer } from 'src/app/models/short-answer.model';

@Component({
  selector: 'form-constructor-short-answer-creator',
  templateUrl: 'short-answer-creator.component.html',
  styleUrls: ['short-answer-creator.component.scss']
})
export class ShortAnswerCreatorComponent implements OnInit {
  @Output() onBlur = new EventEmitter<ShortAnswer>()

  question: string = 'Untitled question'

  constructor() {  }

  ngOnInit() {

  }

  updateQuestion() {
    this.onBlur.emit({
      question: this.question
    });
  }

}
