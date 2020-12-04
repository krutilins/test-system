import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TestCard } from 'src/app/shared//models/test-card.model';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCardComponent {
  @Input() testCard: TestCard;

  constructor(private router: Router) {

  }

  goTo(): void {
    this.router.navigate(['/test', this.testCard.id]);
  }
}
