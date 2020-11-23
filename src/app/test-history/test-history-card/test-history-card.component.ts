import { Component, Input, OnInit } from "@angular/core"
import { Router } from '@angular/router';
import { TestCard } from 'src/app/models/test-card.model';

@Component({
  selector: 'test-history-test-history-card',
  templateUrl: './test-history-card.component.html',
  styleUrls: ['./test-history-card.component.scss']
})
export class TestHistoryCardComponent implements OnInit {
  @Input() testCard: TestCard;

  constructor(private router: Router) {

  }

  goTo() {
    this.router.navigate(['/test-history', this.testCard.id]);
  }

  ngOnInit() {

  }
}
