import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MultipleChoice } from 'src/app/shared//models/multiple-choice.model';

@Component({
  selector: 'app-multiple-choice-creator',
  templateUrl: 'multiple-choice-creator.component.html',
  styleUrls: ['multiple-choice-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MultipleChoiceCreatorComponent implements OnInit {
  @Output() questionChange = new EventEmitter<MultipleChoice>();

  @Output() optionsChange = new EventEmitter<MultipleChoice>();

  form: FormGroup;

  options: FormArray = new FormArray([
    new FormControl('Option')
  ]);

  constructor() { }

  ngOnInit(): void {
    this.initMultipleChoiceCreator();
  }

  private initMultipleChoiceCreator(): void {
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
