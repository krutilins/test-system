import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShortAnswer } from 'src/app/models/short-answer.model';

@Component({
  selector: 'form-constructor-short-answer-creator',
  templateUrl: 'short-answer-creator.component.html',
  styleUrls: ['short-answer-creator.component.scss']
})
export class ShortAnswerCreatorComponent implements OnInit {
  @Output() onBlur = new EventEmitter<ShortAnswer>()

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
