/** Модуль для приложения */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // деректива для работы с модулем [(ngModul)]

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';


// @NgModule - Анотация
// Анотация добавляется спомошью Декоратора @
// Декоратор - спец функция для добавления мета-информации класса
//
// @NgModule добавлена для подтверждения ангуляру что етот Модуль, будет основнвм модулем приложения
// @NgModule принимает обьект в котором
// declarations: для регистрации компонетов
// imports: импортим потдержку платформ
// providers: регистрация сервисов
// bootstrap - ну стили, исклчение из инструкции ))
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// Поскольку мы используем в другом месте то добавляем "export"
export class AppModule { }
