import { FormSection } from './form-section.model';

export interface TestForm {
  id: string;
  title: string;
  formSections: FormSection[];
}
