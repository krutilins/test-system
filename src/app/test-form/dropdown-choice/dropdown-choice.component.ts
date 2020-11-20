import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-choice',
  templateUrl: './dropdown-choice.component.html',
  styleUrls: ['./dropdown-choice.component.scss']
})
export class DropdownChoiceComponent implements OnInit {
  @Input() data;

  @Output() onAnswer = new EventEmitter();

  @Input() editable: boolean = false;

  selectedAnswer: number;

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
