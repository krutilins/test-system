import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormDataService } from '../shared/services/form-data.service';
import { TestForm } from '../shared//models/test-form.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormConstructorComponent implements OnInit {
  testForm: TestForm;
  id: string;

  constructor(private formDataService: FormDataService, private CDRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initFormConstructor();
  }

  replaceElement(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addSection(): void {
    this.testForm.formSections.push({
      sectionTitle: '',
      sectionSubtitle: '',
      questionList: []
    });
  }

  postForm(): void {
    this.formDataService.addTestCard({
      id: this.id,
      title: this.testForm.title
    }).subscribe();

    this.formDataService.addForm(this.testForm)
      .subscribe(() => {
        this.testForm = this.id = uuidv4();
        this.testForm = {
          id: this.id,
          title: 'Untitled',
          formSections: [
            {
              sectionTitle: '',
              sectionSubtitle: '',
              questionList: []
            }
          ]
        };
        this.CDRef.detectChanges();
      });
  }

  private initFormConstructor(): void {
    this.id = uuidv4();
    this.testForm = {
      id: this.id,
      title: 'Untitled',
      formSections: [
        {
          sectionTitle: '',
          sectionSubtitle: '',
          questionList: []
        }
      ]
    };
  }
}
