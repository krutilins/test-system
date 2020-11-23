import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestCard } from '../models/test-card.model';
import { TestForm } from '../models/test-form.model';
import { TestResult } from '../models/test-result.model';

@Injectable({providedIn: 'root'})
export class FormDataService {
  constructor(private http: HttpClient) {

  }

  addForm(testForm: TestForm): Observable<TestForm> {
    return this.http.post<TestForm>(`http://localhost:3000/tests`, testForm);
  }

  getForm(id: string): Observable<TestForm[]> {
    return this.http.get<TestForm[]>(`http://localhost:3000/tests?id=${id}`);
  }

  removeForm(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/tests/${id}`);
  }

  updateForm(id: string, testForm: TestForm): Observable<TestForm> {
    return this.http.put<TestForm>(`http://localhost:3000/tests/${id}`, testForm);
  }

  getTestCards(): Observable<TestCard[]> {
    return this.http.get<TestCard[]>(`http://localhost:3000/test-cards`);
  }

  addTestCard(testCard: TestCard): Observable<TestCard> {
    return this.http.post<TestCard>(`http://localhost:3000/test-cards`, testCard);
  }

  submitForm(testAnswers: TestResult): Observable<TestResult> {
    return this.http.post<TestResult>(`http://localhost:3000/test-history`, testAnswers);
  }

  getSubmitedForm(id: string): Observable<TestResult> {
    return this.http.get<TestResult>(`http://localhost:3000/test-history?id=${id}`);
  }

  addSubmitedFormCard(testCard: TestCard): Observable<TestCard> {
    return this.http.post<TestCard>(`http://localhost:3000/test-history-cards`, testCard);
  }

  getSubmitedFormCards(): Observable<TestCard[]> {
    return this.http.get<TestCard[]>(`http://localhost:3000/test-history-cards`);
  }

}
