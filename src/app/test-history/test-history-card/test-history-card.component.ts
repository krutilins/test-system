import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TestCard } from 'src/app/shared//models/test-card.model';

@Component({
  selector: 'app-test-history-card',
  templateUrl: './test-history-card.component.html',
  styleUrls: ['./test-history-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestHistoryCardComponent {
  @Input() testCard: TestCard;

  constructor(private router: Router) {

  }

  goTo(): void {
    this.router.navigate(['/test-history', this.testCard.id]);
  }
}
