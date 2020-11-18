import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MultipleChoice } from 'src/app/models/multiple-choice.model';

@Component({
  selector: 'form-constructor-multiple-choice-creator',
  templateUrl: 'multiple-choice-creator.component.html',
  styleUrls: ['multiple-choice-creator.component.scss']
})

export class MultipleChoiceCreatorComponent implements OnInit {
  @Output() questionChange = new EventEmitter<MultipleChoice>();

  @Output() optionsChange = new EventEmitter<MultipleChoice>();

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
    console.log(this.form.value)
    this.optionsChange.emit(this.form.value);
  }

  addOption() {
    (<FormArray>this.form.get('options')).push(new FormControl('Option'))
  }
}
