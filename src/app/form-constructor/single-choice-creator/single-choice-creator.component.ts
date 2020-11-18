import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SingleChoice } from 'src/app/models/single-choice.model';

@Component({
  selector: 'form-constructor-single-choice-creator',
  templateUrl: 'single-choice-creator.component.html',
  styleUrls: ['single-choice-creator.component.scss']
})

export class SingleChoiceCreatorComponent implements OnInit {
  @Output() questionChange = new EventEmitter<SingleChoice>();

  @Output() optionsChange = new EventEmitter<SingleChoice>();

  form: FormGroup;

  options: FormArray = new FormArray([
    new FormControl('Option')
  ])

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      question: new FormControl('Untitled question'),
      options: this.options
    })
  }

  updateQuestion() {
    this.questionChange.emit(this.form.value);
  }

  updateOptions() {
    this.optionsChange.emit(this.form.value);
  }

  addOption() {
    (<FormArray>this.form.get('options')).push(new FormControl('Option'))
  }
}
