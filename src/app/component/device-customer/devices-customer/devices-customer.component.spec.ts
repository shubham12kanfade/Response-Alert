import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesCustomerComponent } from './devices-customer.component';

describe('DevicesCustomerComponent', () => {
  let component: DevicesCustomerComponent;
  let fixture: ComponentFixture<DevicesCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
