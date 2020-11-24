import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MultipleChoice } from 'src/app/shared//models/multiple-choice.model';

interface Option {
  text: string;
  checked: boolean;
}
@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleChoiceComponent implements OnInit {
  @Input() data: MultipleChoice;

  @Output() answerChange = new EventEmitter();

  options: Option[] = [];

  answerQuestion(): void {
    this.answerChange.emit({
      question: this.data.question,
      answer: this.options.filter(option => option.checked).map(option => option.text).join(', ')
    });
  }

  ngOnInit(): void {
    this.data.options.forEach((item) => {
      this.options.push({
        text: item,
        checked: false
      });
    }, this);
  }
}
