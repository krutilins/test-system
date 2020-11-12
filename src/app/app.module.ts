import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LongAnswerComponent } from './components/long-answer/long-answer.component';
import { ShortAnswerComponent } from './components/short-answer/short-answer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestFromComponent } from './components/test-form/test-form.component';
import { SingleChoiceComponent } from './components/single-choice/single-choice.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { DropdownChoiceComponent } from './components/dropdown-choice/dropdown-choice.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { TestHistoryComponent } from './components/test-history/test-history.component';
import { TestListComponent } from './components/test-list/test-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    TestListComponent,
    TestFromComponent,
    LongAnswerComponent,
    ConstructorComponent,
    TestHistoryComponent,
    ShortAnswerComponent,
    SingleChoiceComponent,
    MultipleChoiceComponent,
    DropdownChoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
