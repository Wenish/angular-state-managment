import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

export class SubmitForm {
    static readonly type = '[Form] Submit';
}

interface FormStateModel {
    formData: {
      model?: {
        name: string;
      },
      dirty: boolean,
      status: string,
      errors: {}
    };
}

@State<FormStateModel>({
  name: 'form',
  defaults: {
    formData: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
@Injectable()
export class FormState {
    @Action(SubmitForm)
    submitForm(ctx: StateContext<FormStateModel>) {
        const state = ctx.getState()
        console.log(state)
    }
}