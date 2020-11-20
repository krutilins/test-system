import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { QuestionType } from 'src/app/models/question-type.model';
import { TestForm } from '../models/test-form.model';
import { TestResult } from '../models/test-result.model';
import { FormDataService } from '../services/form-data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  testForm: TestForm;
  questionType = QuestionType;
  testAnswers: TestResult;

  constructor(private formDataService: FormDataService, private router: ActivatedRoute) {
    this.formDataService.getForm(this.router.snapshot.params.id).subscribe(
      response => {
        this.testForm = response[0];

      }
    )
  }

  ngOnInit() {

  }

  updateAnswers($event, id) {
    
  }
}
