import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormSection } from 'src/app/shared//models/form-section.model';
import { QuestionType } from 'src/app/shared//models/question-type.model';
import { QuizQuestion } from 'src/app/shared//models/quiz-quesiton.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form-section-creator',
  templateUrl: './form-section-creator.component.html',
  styleUrls: ['./form-section-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSectionCreatorComponent {
  @Input() formSection: FormSection;

  @Output() dropItem = new EventEmitter();

  options: string[] = [
    'Short answer',
    'Long answer',
    'Single choice',
    'Multiple choice',
    'Dropdown'
  ];

  questionType = QuestionType;

  changeQuestionType(index: number, question: QuizQuestion<unknown>): void {
    this.formSection.questionList[index] = question;
  }

  updateQuestionList(index: number, question: QuizQuestion<unknown>): void {
    console.log(index, question);
    this.formSection.questionList[index].data = question;
  }

  addQuestion(formSection: FormSection): void {
    formSection.questionList.push({
      type: this.questionType.ShortAnswer,
      id: uuidv4(),
      data: {
        question: 'Untitled question'
      }
    });
  }

  drop($event: CdkDragDrop<string[]>): void {
    this.dropItem.emit($event);
  }
}
