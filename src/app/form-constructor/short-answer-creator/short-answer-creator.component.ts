import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShortAnswer } from 'src/app/shared//models/short-answer.model';

@Component({
  selector: 'app-short-answer-creator',
  templateUrl: 'short-answer-creator.component.html',
  styleUrls: ['short-answer-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortAnswerCreatorComponent implements OnInit {
  @Output() blurItem = new EventEmitter<ShortAnswer>();

  form: FormGroup;

  ngOnInit(): void {
    this.initShortAnswerCreator();
  }

  private initShortAnswerCreator(): void {
    this.form = new FormGroup({
      question: new FormControl('Untitled question')
    });
  }

  updateQuestion(): void {
    this.blurItem.emit(this.form.value);
  }

}
