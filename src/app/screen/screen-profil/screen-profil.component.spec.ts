import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProfilComponent } from './screen-profil.component';

describe('ScreenProfilComponent', () => {
  let component: ScreenProfilComponent;
  let fixture: ComponentFixture<ScreenProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenProfilComponent]
    });
    fixture = TestBed.createComponent(ScreenProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
