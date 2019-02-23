import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material/';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  exports: [MatDatepickerModule, MatInputModule, MatNativeDateModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
