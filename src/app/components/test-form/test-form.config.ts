import { QuestionType } from "src/app/models/question-type.model"


export const QUIZ_QUESTIONS = [
  {
    type: QuestionType.ShortAnswer,
    id: '1',
    data: {
      question: 'This is short answer'
    }
  },
  {
    type: QuestionType.LongAnswer,
    id: '2',
    data: {
      question: 'This is long answer'
    }
  },
  {
    type: QuestionType.SingleChoice,
    id: '3',
    data: {
      question: 'This is short answer',
      options: [
        'option one',
        'option two',
        'option three',
        'option four'
      ]
    }
  },
  {
    type: QuestionType.MultipleChoice,
    id: '4',
    data: {
      question: 'This is long answer',
      options: [
        'option one',
        'option two',
        'option three',
        'option four'
      ]
    }
  },
  {
    type: QuestionType.DropdownChoice,
    id: '5',
    data: {
      question: 'This is long answer',
      options: [
        'option one',
        'option two',
        'option three',
        'option four'
      ]
    }
  },
  {
    type: QuestionType.ShortAnswer,
    id: '6',
    data: {
      question: 'This is short answer'
    }
  },
  {
    type: QuestionType.LongAnswer,
    id: '7',
    data: {
      question: 'This is long answer'
    }
  },
  {
    type: QuestionType.SingleChoice,
    id: '8',
    data: {
      question: 'This is short answer',
      options: [
        'option one',
        'option two',
        'option three',
        'option four'
      ]
    }
  },
  {
    type: QuestionType.MultipleChoice,
    id: '9',
    data: {
      question: 'This is long answer',
      options: [
        'option one',
        'option two',
        'option three',
        'option four'
      ]
    }
  },
  {
    type: QuestionType.DropdownChoice,
    id: '10',
    data: {
      question: 'This is long answer',
      options: [
        'option one',
        'option two',
        'option three',
        'option four'
      ]
    }
  }
]
