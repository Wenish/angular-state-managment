import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  list: string[] = ['4234', '23422', '5345']

  @Output()
  deleteItem = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteItem = (value: string) => {
    this.deleteItem.emit(value)
  }

}
