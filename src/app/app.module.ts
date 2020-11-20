import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { TestCardComponent } from './components/test-card/test-card.component';
import { TestHistoryComponent } from './components/test-history/test-history.component';
import { FormConstructorModule } from './form-constructor/form-constructor.module';
import { SharedModule } from './shared/shared.module';
import { TestFormModule } from './test-form/test-form.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    TestListComponent,
    TestCardComponent,
    TestHistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TestFormModule,
    AppRoutingModule,
    FormConstructorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
