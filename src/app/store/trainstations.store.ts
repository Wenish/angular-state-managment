import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: TrainstationsState.name,
  defaults: ['bern', 'zürich', 'lugano']
})
@Injectable()
export class TrainstationsState {
    constructor() {}
}