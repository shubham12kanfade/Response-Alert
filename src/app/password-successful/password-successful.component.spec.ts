import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSuccessfulComponent } from './password-successful.component';

describe('PasswordSuccessfulComponent', () => {
  let component: PasswordSuccessfulComponent;
  let fixture: ComponentFixture<PasswordSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
