import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export class DeleteTrain {
    static readonly type = '[Trains] DeleteTrain'
    constructor(public id: string) {}
}

export class LoadTrains {
    static readonly type = '[Trains] LoadTrains'
}

@State<string[]>({
  name: TrainsState.name,
  defaults: ['909', '234', '34543']
})
@Injectable()
export class TrainsState {

    constructor() {}

    @Action(DeleteTrain)
    async deleteTrain(ctx: StateContext<string[]>, action: DeleteTrain) {
        console.log(action)
        // call api to delete train
        const newState = ctx.getState().filter((value) => value != action.id)
        console.log(newState)
        ctx.setState(newState)
    }

    @Action(LoadTrains)
    loadTrains(ctx: StateContext<string[]>) {
        // call api to get trains
        ctx.setState(['23', '13', '14', '153', '16'])
    }

    

    @Selector([TrainsState])
    static trainsEndsWithNumberThree(trainState: string[]) {
        return trainState.filter(value => {
            return value.endsWith('3')
        })
    }
}