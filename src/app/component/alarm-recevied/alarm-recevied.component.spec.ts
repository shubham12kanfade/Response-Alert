import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmReceviedComponent } from './alarm-recevied.component';

describe('AlarmReceviedComponent', () => {
  let component: AlarmReceviedComponent;
  let fixture: ComponentFixture<AlarmReceviedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmReceviedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmReceviedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
