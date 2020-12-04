import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SingleChoice } from 'src/app/shared//models/single-choice.model';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleChoiceComponent {
  @Input() data: SingleChoice;

  @Output() answerChange = new EventEmitter();

  selectedAnswer = '';

  answerQuestion(): void {
    this.answerChange.emit({
      question: this.data.question,
      answer: this.selectedAnswer
    });
  }
}
