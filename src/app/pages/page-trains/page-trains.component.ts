import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TrainsState } from 'src/app/store/trains.store';

@Component({
  selector: 'app-page-trains',
  templateUrl: './page-trains.component.html',
  styleUrls: ['./page-trains.component.css']
})
export class PageTrainsComponent implements OnInit {

  @Select(TrainsState) trains$!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
