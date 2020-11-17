import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'form-constructor-single-choice-creator',
  templateUrl: 'single-choice-creator.component.html',
  styleUrls: ['single-choice-creator.component.scss']
})

export class SingleChoiceCreatorComponent implements OnInit {
  question: string = "Untitle question";
  @Output() questionChange = new EventEmitter();

  options: string[] = [];
  @Output() optionsChange = new EventEmitter();


  constructor() { }

  ngOnInit() { }

  updateQuestion() {
    this.questionChange.emit(this.question);
  }

  updateOptions() {
    this.optionsChange.emit(this.options);
  }

  addOption() {
    this.options.push('option');
  }
}
