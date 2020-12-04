import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestResult } from 'src/app/shared//models/test-result.model';
import { FormDataService } from 'src/app/shared/services/form-data.service';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestHistoryComponent implements OnInit {
  testResult: TestResult;

  constructor(private formDataService: FormDataService, private route: ActivatedRoute, private CDRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.initTestAnswers();
  }

  private initTestAnswers(): void {
    this.formDataService.getSubmitedForm(this.route.snapshot.params.id)
    .subscribe(testResult => {
      this.testResult = testResult[0];
      this.CDRef.detectChanges();
    });
  }
}
