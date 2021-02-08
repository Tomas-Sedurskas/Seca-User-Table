import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSwitchComponent } from './layout-switch.component';

describe('LayoutSwitchComponent', () => {
  let component: LayoutSwitchComponent;
  let fixture: ComponentFixture<LayoutSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
