import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Dropdown } from 'src/app/shared//models/dropdown.model';

@Component({
  selector: 'app-dropdown-choice',
  templateUrl: './dropdown-choice.component.html',
  styleUrls: ['./dropdown-choice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownChoiceComponent {
  @Input() data: Dropdown;

  @Output() answerChange = new EventEmitter();

  selectedAnswer: number;

  answerQuestion(): void {
    this.answerChange.emit({
      question: this.data.question,
      answer: this.selectedAnswer
    });
  }
}
