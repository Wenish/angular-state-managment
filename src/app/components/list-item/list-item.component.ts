import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  id = "123"

  @Output()
  delete = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit(this.id)
  }

}
