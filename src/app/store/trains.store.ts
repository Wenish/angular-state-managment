import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: 'trains',
  defaults: ['3453', '7243', '1623']
})
@Injectable()
export class TrainsState {}