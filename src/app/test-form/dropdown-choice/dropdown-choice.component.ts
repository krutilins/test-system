import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dropdown } from 'src/app/models/dropdown.model';

@Component({
  selector: 'app-dropdown-choice',
  templateUrl: './dropdown-choice.component.html',
  styleUrls: ['./dropdown-choice.component.scss']
})
export class DropdownChoiceComponent implements OnInit {
  @Input() data: Dropdown;

  @Output() onAnswer = new EventEmitter();

  @Input() editable: boolean = false;

  selectedAnswer: number;

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
