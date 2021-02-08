import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSwitchComponent } from './order-switch.component';

describe('OrderSwitchComponent', () => {
  let component: OrderSwitchComponent;
  let fixture: ComponentFixture<OrderSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
