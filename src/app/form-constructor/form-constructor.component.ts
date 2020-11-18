import { Component, OnInit } from '@angular/core';
import { FormSection } from 'src/app/models/form-section.model';
import { QuestionType } from 'src/app/models/question-type.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-constructor',
  templateUrl: './form-constructor.component.html',
  styleUrls: ['./form-constructor.component.scss']
})
export class FormConstructorComponent implements OnInit {
  formSections: FormSection[] = [
    {
      sectionTitle: '',
      sectionSubtitle: '',
      questionList: []
    }
  ];

  questionType = QuestionType;

  counter: number = 0;

  options: string[] = [
    'Short answer',
    'Long answer',
    'Single choice',
    'Multiple choice',
    'Dropdown'
  ]

  constructor() { }

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

  updateQuestionList() {
    console.log(this.formSections[0].sectionTitle);
  }

  addQuestion(formSection: FormSection) {
    this.counter++;
    formSection.questionList.push({
      type: this.questionType.ShortAnswer,
      id: this.counter.toString(),
      data: []
    })
  }

  addSection() {
    this.formSections.push(    {
      sectionTitle: '',
      sectionSubtitle: '',
      questionList: []
    })
  }
}
