import { Component, OnInit } from '@angular/core';
import { ObjectTypes } from '../shared/ObjectTypes';
import { _BD } from '../shared/data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  ObjectTodos: ObjectTypes[] = _BD; // ето не правельный вариант ну для упрощения пока так.

  constructor() {} // создание переменных и констант тут

  ngOnInit() {} // Присвоение/получение данных тут

  /**
   * Изменение состояниячекбокса
   * @param {ObjectTypes} checkbox
   */
  onCheck(checkbox: ObjectTypes) {
    console.log('Checkbox : ', checkbox);

    checkbox.completed = !checkbox.completed;
  }

  /**
   * Удаление тудушки
   * @param {ObjectTypes} del
   */
  onDelete(del: ObjectTypes) {

    console.log('Delete : ', del);

    const index = this.ObjectTodos.indexOf(del);

    if (index > -1) {
      this.ObjectTodos.splice(index, 1);
    }
  }
}
