import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormDataService } from '../services/form-data.service';
import { TestForm } from '../models/test-form.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.scss']
})
export class FormConstructorComponent implements OnInit {
  testForm: TestForm;
  id: string;

  constructor(private formDataService: FormDataService) {
    this.id = uuidv4();
    this.testForm = {
      id: this.id,
      title: "Untitled",
      formSections: [
        {
          sectionTitle: '',
          sectionSubtitle: '',
          questionList: []
        }
      ]
    }
  }

  ngOnInit() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addSection() {
    this.testForm.formSections.push({
      sectionTitle: '',
      sectionSubtitle: '',
      questionList: []
    })
  }

  postForm() {
    this.formDataService.addTestCard({
      id: this.id,
      title: this.testForm.title
    }).subscribe(response => console.log(response))

    this.formDataService.addForm(this.testForm)
      .subscribe(() => {
        this.testForm = this.id = uuidv4();
        this.testForm = {
          id: this.id,
          title: "Untitled",
          formSections: [
            {
              sectionTitle: '',
              sectionSubtitle: '',
              questionList: []
            }
          ]
        }
      });
  }
}
