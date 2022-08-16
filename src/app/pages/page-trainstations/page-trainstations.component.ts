import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TrainstationsState } from 'src/app/store/trainstations.store';

@Component({
  selector: 'app-page-trainstations',
  templateUrl: './page-trainstations.component.html',
  styleUrls: ['./page-trainstations.component.css']
})
export class PageTrainstationsComponent implements OnInit {

  @Select(TrainstationsState) trainstations$!: Observable<string[]>;

  
  constructor() { }

  ngOnInit(): void {
  }

}
