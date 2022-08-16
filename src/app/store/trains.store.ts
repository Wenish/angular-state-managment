import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

@State<string[]>({
  name: 'trains',
  defaults: ['3453', '7242', '1623']
})
@Injectable()
export class TrainsState {


    @Selector([TrainsState])
    static trainsEndsWithNumberThree(trainState: string[]) {
        return trainState.filter(value => {
            return value.endsWith('3')
        })
    }
}