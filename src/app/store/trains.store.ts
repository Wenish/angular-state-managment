import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export class DeleteTrain {
    static readonly type = '[Trains] DeleteTrain'
    constructor(public id: string) {}
}

export class LoadTrains {
    static readonly type = '[Trains] LoadTrains'
}

export interface TrainsStateModel {
    list: []
}

@State<string[]>({
  name: TrainsState.name,
  defaults: ['909', '234', '34543']
})
@Injectable()
export class TrainsState {

    constructor() {}

    @Action(DeleteTrain)
    async deleteTrain(ctx: StateContext<TrainsState>, action: DeleteTrain) {
        console.log(action.id)
        // const response = await this.apiclient.trains.delete(action.id)
    }

    @Action(LoadTrains)
    loadTrains(ctx: StateContext<TrainsState>) {
        console.log(ctx.getState())
    }

    

    @Selector([TrainsState])
    static trainsEndsWithNumberThree(trainState: string[]) {
        return trainState.filter(value => {
            return value.endsWith('3')
        })
    }
}