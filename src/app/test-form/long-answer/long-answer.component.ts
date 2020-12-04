import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LongAnswer } from 'src/app/shared//models/long-answer.model';

@Component({
  selector: 'app-long-answer',
  templateUrl: './long-answer.component.html',
  styleUrls: ['./long-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LongAnswerComponent {
  @Input() data: LongAnswer;

  @Output() answerChange = new EventEmitter();

  answer = '';

  answerQuestion(): void {
    this.answerChange.emit({
      question: this.data.question,
      answer: this.answer
    });
  }
}
