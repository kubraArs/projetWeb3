import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLoginComponent } from './screen-login.component';

describe('ScreenLoginComponent', () => {
  let component: ScreenLoginComponent;
  let fixture: ComponentFixture<ScreenLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenLoginComponent]
    });
    fixture = TestBed.createComponent(ScreenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
