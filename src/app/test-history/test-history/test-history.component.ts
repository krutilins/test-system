import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { TestResult } from 'src/app/models/test-result.model';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'test-history-list-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.scss']
})
export class TestHistoryComponent implements OnInit {
  testResult: TestResult;

  constructor(private formDataService: FormDataService, private route: ActivatedRoute) {
    this.formDataService.getSubmitedForm(this.route.snapshot.params.id).subscribe(
      response => {
        this.testResult = response[0];
      }
    )
  }

  ngOnInit() {

  }
}
