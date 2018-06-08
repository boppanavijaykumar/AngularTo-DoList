import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {
  addList: string;
  @Output() propEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sample() {
    alert("Hey " + this.addList);
    this.propEmitter.emit(" Welcome to " + this.addList);
  }
}
