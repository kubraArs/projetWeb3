import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTodoComponent } from './screen-todo.component';

describe('ScreenTodoComponent', () => {
  let component: ScreenTodoComponent;
  let fixture: ComponentFixture<ScreenTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenTodoComponent]
    });
    fixture = TestBed.createComponent(ScreenTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
