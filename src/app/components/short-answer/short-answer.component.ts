import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model'

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.scss']
})
export class ShortAnswerComponent implements OnInit {
  @Input('data') quizQuestion

  @Output() newItemEvent = new EventEmitter()
  form: FormGroup

  constructor() {

  }

  ngOnInit() {

  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value)
  }
}
