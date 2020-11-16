import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { TestCard } from 'src/app/models/test-card.model';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {
  @Input() testCard: TestCard;

  constructor(private router: Router) {

  }

  goTo() {
    this.router.navigate(['/test', this.testCard.id]);
  }

  ngOnInit() {

  }
}
