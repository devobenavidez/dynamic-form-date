import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from './question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  minDate1=new Date(2019, 1, 5);
  minDate2=new Date(2019, 1, 8);
  get isValid() { return this.form.controls[this.question.key].valid; }

  cambio(){
    this.minDate1=new Date(2019, 1, 18);
    this.minDate2=new Date(2019, 1, 20);
  }

}
