import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LongAnswer } from 'src/app/models/long-answer.model';

@Component({
  selector: 'form-constructor-long-answer-creator',
  templateUrl: 'long-answer-creator.component.html',
  styleUrls: ['long-answer-creator.component.scss']
})

export class LongAnswerCreatorComponent implements OnInit {
  @Output() onBlur = new EventEmitter<LongAnswer>()

  form: FormGroup;

  constructor() {  }

  ngOnInit() {
    this.form = new FormGroup({
      question: new FormControl('Untitled question')
    })
  }

  updateQuestion() {
    this.onBlur.emit(this.form.value);
  }
}
