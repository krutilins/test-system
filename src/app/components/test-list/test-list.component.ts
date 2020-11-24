import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TestCard } from 'src/app/shared//models/test-card.model';
import { FormDataService } from 'src/app/shared/services/form-data.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestListComponent implements OnInit {
  testCards: TestCard[] = [];

  constructor(private formDataService: FormDataService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initTestList();
  }

  initTestList(): void {
    this.formDataService.getTestCards().subscribe(
      testCards => {
        this.testCards = testCards;
        this.changeDetectorRef.detectChanges();
      }
    );
  }
}
