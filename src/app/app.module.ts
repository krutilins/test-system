import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TestFormModule } from './test-form/test-form.module';
import { TestHistoryModule } from './test-history/test-history-list.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { FormConstructorModule } from './form-constructor/form-constructor.module';
import { TestCardComponent } from './components/test-card/test-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    TestListComponent,
    TestCardComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    TestFormModule,
    AppRoutingModule,
    HttpClientModule,
    TestHistoryModule,
    FormConstructorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
