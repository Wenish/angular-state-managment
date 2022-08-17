import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteTrain, LoadTrains, TrainsState } from 'src/app/store/trains.store';

@Component({
  selector: 'app-page-trains',
  templateUrl: './page-trains.component.html',
  styleUrls: ['./page-trains.component.css']
})
export class PageTrainsComponent implements OnInit {

  @Select(TrainsState.trainsEndsWithNumberThree) trains$!: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadTrains())
  }

  onDeleteItem(value: string) {
    this.store.dispatch(new DeleteTrain(value))
  }
}
