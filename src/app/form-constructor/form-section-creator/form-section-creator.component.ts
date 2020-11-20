import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormSection } from 'src/app/models/form-section.model';
import { QuestionType } from 'src/app/models/question-type.model';
import { QuizQuestion } from 'src/app/models/quiz-quesiton.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'form-constructor-form-section-creator',
  templateUrl: './form-section-creator.component.html',
  styleUrls: ['./form-section-creator.component.scss']
})
export class FormSectionCreatorComponent implements OnInit {
  @Input() formSection: FormSection;

  @Output() onDrop = new EventEmitter();

  options: string[] = [
    'Short answer',
    'Long answer',
    'Single choice',
    'Multiple choice',
    'Dropdown'
  ]

  questionType = QuestionType;

  constructor() {}

  ngOnInit() {

  }

  changeQuestionType(index: number, question: QuizQuestion<unknown>) {
    this.formSection.questionList[index] = question;
  }

  updateQuestionList(index: number, question: QuizQuestion<unknown>) {
    console.log(index, question);
    this.formSection.questionList[index].data = question;
  }

  addQuestion(formSection: FormSection) {
    formSection.questionList.push({
      type: this.questionType.ShortAnswer,
      id: uuidv4(),
      data: {
        question: "Untitled question"
      }
    })
  }

  drop($event: CdkDragDrop<string[]>) {
    this.onDrop.emit($event);
  }
}
