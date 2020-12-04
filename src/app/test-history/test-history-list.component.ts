import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TestCard } from '../shared//models/test-card.model';
import { FormDataService } from '../shared/services/form-data.service';

@Component({
  selector: 'app-test-history-list',
  templateUrl: 'test-history-list.component.html',
  styleUrls: ['test-history-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestHistoryListComponent implements OnInit {
  testCards: TestCard[] = [];

  constructor(private formDataService: FormDataService, private CDRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initTestList();
  }

  listIsEmpty(): boolean {
    return !this.testCards.length;
  }

  private initTestList(): void {
    this.formDataService.getSubmitedFormCards()
      .subscribe(testCards => {
        this.testCards = testCards;
        this.CDRef.detectChanges();
      });
  }
}
