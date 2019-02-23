import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'fechaini',
        label: 'FECHA INICIAL',
        value: '',
        type:'email',        
        order: 1,
        nombreHijo:""
      }),

      new TextboxQuestion({
        key: 'fechafin',
        label: 'FECHA FINAL',        
        type:'text',
        order: 2,
        nombrePadre:""
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
