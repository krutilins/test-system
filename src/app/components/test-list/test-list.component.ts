import { Component, OnInit } from '@angular/core'
import { TestCard } from 'src/app/models/test-card.model'
import { TEST_CARDS } from './test-list.config'

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  testCards: TestCard[]

  constructor() {
    this.testCards = TEST_CARDS;
  }

  ngOnInit() {
  }
}
