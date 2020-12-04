import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SingleChoice } from 'src/app/shared//models/single-choice.model';

@Component({
  selector: 'app-single-choice-creator',
  templateUrl: 'single-choice-creator.component.html',
  styleUrls: ['single-choice-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleChoiceCreatorComponent implements OnInit {
  @Output() questionChange = new EventEmitter<SingleChoice>();

  @Output() optionsChange = new EventEmitter<SingleChoice>();

  form: FormGroup;

  options: FormArray = new FormArray([
    new FormControl('Option')
  ]);

  ngOnInit(): void {
    this.initSingleChoiceCreator();
  }

  private initSingleChoiceCreator(): void {
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
