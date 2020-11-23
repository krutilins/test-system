import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from 'src/app/models/question-type.model';
import { TestForm } from '../models/test-form.model';
import { TestResult } from '../models/test-result.model';
import { FormDataService } from '../services/form-data.service';
import { v4 as uuidv4 } from 'uuid';
import { TemplateParseResult } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  testForm: TestForm;
  questionType = QuestionType;
  testAnswers: TestResult = {
    id: '',
    title: '',
    sections: []
  };

  constructor(private formDataService: FormDataService, private route: ActivatedRoute, private router: Router) {
    this.formDataService.getForm(this.route.snapshot.params.id).subscribe(
      response => {
        this.testForm = response[0];

        this.testAnswers.id = uuidv4();
        this.testAnswers.title = this.testForm.title;
        this.testForm.formSections.forEach((formSection) => {
          this.testAnswers.sections.push({
            title: formSection.sectionTitle,
            subtitle: formSection.sectionSubtitle,
            quizAnswers: []
          })
        }, this);
      }
    )
  }

  ngOnInit() {

  }

  updateAnswers(sectionId, questionId, $event) {
    this.testAnswers.sections[sectionId].quizAnswers[questionId] = $event;
  }

  submitForm() {
    this.formDataService.submitForm(this.testAnswers).subscribe();
    this.formDataService.addSubmitedFormCard({
      title: this.testAnswers.title,
      id: this.testAnswers.id
    }).subscribe()
    this.router.navigate(['/']);
  }
}
