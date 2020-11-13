import {Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.scss']
})
export class SingleChoiceComponent implements OnInit {
  @Input('data') quizQuestion

  constructor() {

  }

  ngOnInit() {

  }
}
