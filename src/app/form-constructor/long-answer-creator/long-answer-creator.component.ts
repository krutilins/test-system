import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LongAnswer } from 'src/app/shared//models/long-answer.model';

@Component({
  selector: 'app-long-answer-creator',
  templateUrl: 'long-answer-creator.component.html',
  styleUrls: ['long-answer-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LongAnswerCreatorComponent implements OnInit {
  @Output() blurItem = new EventEmitter<LongAnswer>();

  form: FormGroup;

  ngOnInit(): void {
    this.initLongAnswerCreator();
  }

  private initLongAnswerCreator(): void {
    this.form = new FormGroup({
      question: new FormControl('Untitled question')
    });
  }

  updateQuestion(): void {
    this.blurItem.emit(this.form.value);
  }
}
