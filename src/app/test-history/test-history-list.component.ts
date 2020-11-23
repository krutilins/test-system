import { Component, OnInit } from "@angular/core"
import { TestCard } from '../models/test-card.model';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'test-history-list-root',
  templateUrl:'test-history-list.component.html',
  styleUrls: ['test-history-list.component.scss']
})
export class TestHistoryListComponent implements OnInit {
  testCards: TestCard[] = [];

  constructor(private formDataService: FormDataService) {
    this.formDataService.getSubmitedFormCards().subscribe(
      response => {
        this.testCards = response;
      }
    )
  }

  ngOnInit() {

  }
}
