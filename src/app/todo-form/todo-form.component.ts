import { Component, OnInit } from '@angular/core';
import { ObjectTypes } from '../shared/ObjectTypes';
import { _BD } from '../shared/data';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() {} // создание переменных и констант тут
  ngOnInit() {} // Присвоение/получение данных тут

  newTodoTitle = '';
  ObjectTodos: ObjectTypes[] = _BD; // ето не правельный вариант ну для упрощения пока так.

  /**
   * Супер когда есть описание функций!
   * Сохранение туду формы.
   */
  createTasks() {
    // поскольку нам нужно создавать еще обьект, то нужно добавить конструктор в класс ObjectTypes
    console.log('Create Tasks : ', this.newTodoTitle); // вывод создаваемого обьекта
    const tod: ObjectTypes = new ObjectTypes(this.newTodoTitle); // новый обьект
    this.ObjectTodos.push(tod); // Добавим в масив
    this.newTodoTitle = ''; // обнулим форму засчет привязки
  }

}
