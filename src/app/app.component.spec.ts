/**
 * Ето файлы для тестирования функционала компонентов.
 * Запустить тесты можно командой 'ng test' || 'npm test'
 *
 * @info  https://angular.io/guide/testing
 * @info  https://habr.com/post/349380/
 */
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';

// describe - Метод используется для группировки взаимосвязанных тестов
describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;



  /**
   * beforeEach(function) - Метод используется для назначения задачи, которая должна выполняться перед каждым модульным тестом
   * afterEach(function) - Метод используется для назначения задачи, которая должна выполняться после каждого модульного теста
   */
  beforeEach(
    async(() => {
// Для тестов необходимо, чтобы компоненты скомпилировались до того, как через метод createComponent() будут созданы их экземпляры.
// Поэтому тело первого BeforeEach мы поместили в asynс метод, благодаря чему его содержимое выполняется в специальной асинхронной среде.
// И пока не будет выполнен метод compileComponents(), следующий BeforeEach не запустится:
      TestBed.configureTestingModule({
        declarations: [
          AppComponent, // декларируем проверяемый компонент
        ],
        schemas: [NO_ERRORS_SCHEMA] // Игнорируем вставляемые компоненты (todo-form / todo-list)
      }).compileComponents(); // compileComponents — метод, делающий вынесенные в отдельные файлы стили и шаблон встроенными.
    })
  );


  beforeEach(() => {
    // TestBed - предоставляет :
    // configureTestingModule - Метод используется для настройки тестового модуля Angular
    // createComponent - Метод используется для создания экземпляра компонента
    // compileComponents - Метод используется для компиляции компонентов
    // debugElement - Свойство возвращает тестовый управляющий элемент для компонента

    // debugElement - предоставляет :
    // componentInstance - Свойство возвращает объект компонента
    // nativeElement - Свойство возвращает объект, представляющий элемент HTML в DOM
    // whenStable() - Метод возвращает объект Promise, обрабатываемый при полном применении эффекта операции. За подробностями обращайтесь
    //                к разделу «Тестирование с асинхронными операциями»
    // children - Свойство возвращает массив объектов DebugElement, представляющих дочерние элементы этого элемента
    // query(selectorFunction) - Функции selectorFunction передается объект DebugElement для каждого элемента HTML в шаблоне
    //                          компонента; метод возвращает первый объект DebugElement, для которого функция возвращает true
    // queryAll(selectorFunction) - Аналог метода query, не считая того, что результат состоит из всех объектов DebugElement, для которых
    //                              функция возвращает true
    // triggerEventHandler(name,event) - Метод инициирует событие.

    fixture = TestBed.createComponent(AppComponent); // создать экземпляр компонента.
    component = fixture.debugElement.componentInstance; // Свойство возвращает объект компонента
    compiled = fixture.debugElement.nativeElement; // Свойство возвращает объект DOM, представляющий управляющиэлемент для компонента
    fixture.detectChanges(); // Метод заставляет тестовую среду обнаруживать изменения состония и отражать их в шаблоне компонента
  });



  // it( description <string>, function() ) - Метод используется для выполнения тестового действия
  // expect(value) - Метод используется для идентификации результата теста
  it('should create the app', async(() => {

    // toBe(value) - М.п., что результат равен заданному значению (при этом он не обязан быть тем же объектом) / ожидаемое значение
    // toContain(substring) - Метод проверяет, что результат содержит заданную подстроку
    // toEqual(object) - Метод проверяет, что результат является тем же объектом, что и заданное значение
    // toMatch(regexp) - Метод проверяет, что результат соответствует заданному регулярному выражению
    // toBeDefined() - Метод проверяет, что результат определен
    // toBeUndefined() - Метод проверяет, что результат не определен
    // toBeNull() - Метод проверяет, что результат равен null
    // toBeTruthy() - Метод проверяет, что результат является квазиистинным
    // toBeFalsy() - Метод проверяет, что результат является квазиложным
    // toBeLessThan(value) - Метод проверяет, что результат меньше заданного значения
    // toBeGreaterThan(value) - Метод проверяет, что результат больше заданного значения

    expect(component).toBeTruthy();
  }));



  it(`should have as title ' 2Do'`, async(() => {
    expect(component.title).toEqual(' 2Do');
  }));



  it('should render title in a h1 tag', async(() => {
    // Далее мы хотим проверить, что переменная компонента title вставляется в DOM.
    // При этом мы ожидаем, что ей присвоено значение ' 2Do'.
    // А это присваивание происходит при инициализации компонента.
    fixture.detectChanges(); // detectChanges - мы инициализируем компонент.
    expect(compiled.querySelector('h1').textContent).toContain('Angular  2Do!');
  }));



  /*
    it(`should set class 'some-class' when clicked`, async(() => {
      let listItem = compiled.querySelector('li');
      listItem.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(compiled.querySelector('li.some-class')).not.toEqual(null);
      });
    }));
  */

});
