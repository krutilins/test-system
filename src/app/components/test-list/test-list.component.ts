import { Component, OnInit } from '@angular/core';
import { TestCard } from 'src/app/models/test-card.model';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  testCards: TestCard[] = [];

  constructor(private formDataService: FormDataService) {
    this.formDataService.getTestCards().subscribe(
      response => {
        this.testCards = response
      }
    )
  }

  ngOnInit() {
  }
}
