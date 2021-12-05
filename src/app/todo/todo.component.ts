import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    // this.item.description = description;
  }
}
