import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from 'src/app/shared//models/question-type.model';
import { TestForm } from '../shared//models/test-form.model';
import { TestResult } from '../shared//models/test-result.model';
import { v4 as uuidv4 } from 'uuid';
import { FormDataService } from '../shared/services/form-data.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestFormComponent implements OnInit {
  testForm: TestForm;
  questionType = QuestionType;
  testAnswers: TestResult = {
    id: '',
    title: '',
    sections: []
  };

  constructor(
    private formDataService: FormDataService,
    private route: ActivatedRoute,
    private router: Router,
    private CDRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.initTestForm();
  }

  initTestForm(): void {
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
          });
          this.CDRef.detectChanges();
        }, this);
      }
    );
  }

  updateAnswers(sectionId, questionId, $event): void {
    this.testAnswers.sections[sectionId].quizAnswers[questionId] = $event;
  }

  submitForm(): void {
    this.formDataService.submitForm(this.testAnswers).subscribe(() => this.CDRef.detectChanges());
    this.formDataService.addSubmitedFormCard({
      title: this.testAnswers.title,
      id: this.testAnswers.id
    }).subscribe(() => this.CDRef.detectChanges());
    this.router.navigate(['/']);
  }
}
