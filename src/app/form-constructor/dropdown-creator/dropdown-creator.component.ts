import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Dropdown } from 'src/app/shared/models/dropdown.model';

@Component({
  selector: 'app-dropdown-creator',
  templateUrl: 'dropdown-creator.component.html',
  styleUrls: ['dropdown-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DropdownCreatorComponent implements OnInit {
  @Output() questionChange = new EventEmitter<Dropdown>();

  @Output() optionsChange = new EventEmitter<Dropdown>();

  form: FormGroup;

  options: FormArray = new FormArray([
    new FormControl('Option')
  ]);

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      question: new FormControl('Untitled question'),
      options: this.options
    });
  }

  updateQuestion(): void {
    this.questionChange.emit(this.form.value);
  }

  updateOptions(): void {
    this.optionsChange.emit(this.form.value);
  }

  addOption(): void {
    (this.form.get('options') as FormArray).push(new FormControl('Option'));
  }
}
