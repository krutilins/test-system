import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestCard } from 'src/app/shared//models/test-card.model';
import { TestForm } from 'src/app/shared//models/test-form.model';
import { TestResult } from 'src/app/shared//models/test-result.model';
import { API_FORM_DATA } from '../constants/api-form-data.const';

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private API_HOSTNAME = API_FORM_DATA;

  constructor(private http: HttpClient) { }

  addForm(testForm: TestForm): Observable<TestForm> {
    return this.http.post<TestForm>(`${this.API_HOSTNAME}/tests`, testForm);
  }

  getForm(id: string): Observable<TestForm[]> {
    return this.http.get<TestForm[]>(`${this.API_HOSTNAME}/tests?id=${id}`);
  }

  removeForm(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_HOSTNAME}/tests/${id}`);
  }

  updateForm(id: string, testForm: TestForm): Observable<TestForm> {
    return this.http.put<TestForm>(`${this.API_HOSTNAME}/tests/${id}`, testForm);
  }

  getTestCards(): Observable<TestCard[]> {
    return this.http.get<TestCard[]>(`${this.API_HOSTNAME}/test-cards`);
  }

  addTestCard(testCard: TestCard): Observable<TestCard> {
    return this.http.post<TestCard>(`${this.API_HOSTNAME}/test-cards`, testCard);
  }

  submitForm(testAnswers: TestResult): Observable<TestResult> {
    return this.http.post<TestResult>(`${this.API_HOSTNAME}/test-history`, testAnswers);
  }

  getSubmitedForm(id: string): Observable<TestResult> {
    return this.http.get<TestResult>(`${this.API_HOSTNAME}/test-history?id=${id}`);
  }

  addSubmitedFormCard(testCard: TestCard): Observable<TestCard> {
    return this.http.post<TestCard>(`${this.API_HOSTNAME}/test-history-cards`, testCard);
  }

  getSubmitedFormCards(): Observable<TestCard[]> {
    return this.http.get<TestCard[]>(`${this.API_HOSTNAME}/test-history-cards`);
  }

}
