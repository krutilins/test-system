import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Dropdown } from 'src/app/models/dropdown.model';

@Component({
  selector: 'form-constructor-dropdown-creator',
  templateUrl: 'dropdown-creator.component.html',
  styleUrls: ['dropdown-creator.component.scss']
})

export class DropdownCreatorComponent implements OnInit {
  @Output() questionChange = new EventEmitter<Dropdown>();

  @Output() optionsChange = new EventEmitter<Dropdown>();

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
