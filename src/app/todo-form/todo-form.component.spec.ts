import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {FormsModule} from '@angular/forms'; // import привязки типо [(ngModel)]

import {TodoFormComponent} from './todo-form.component'; // import проверяемый компонент

describe('TodoFormComponent', () => {

  let fixture: ComponentFixture<TodoFormComponent>;
  let component: TodoFormComponent;
  let compiled;


  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule // декларируем привязки типо [(ngModel)]
        ],
        declarations: [
          TodoFormComponent, // декларируем проверяемый компонент
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent); // создать экземпляр компонента.
    component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
    compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
    fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
  });

  it('should Create TodoFormComponent', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should Create NEW Task`, async(() => {
    component.newTodoTitle = 'NEW Task';
    const objList = component.ObjectTodos;

    component.createTasks();
    fixture.detectChanges();

    expect(objList.length + 1).toBe(objList.length + 1); // state after click
  }));

});
