import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ShortAnswer } from 'src/app/shared//models/short-answer.model';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortAnswerComponent {
  @Input() data: ShortAnswer;

  @Output() answerChange = new EventEmitter();

  answer = '';

  answerQuestion(): void {
    this.answerChange.emit({
      question: this.data.question,
      answer: this.answer
    });
  }
}
