import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpageComponent } from './orderpage.component';

describe('OrderpageComponent', () => {
  let component: OrderpageComponent;
  let fixture: ComponentFixture<OrderpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderpageComponent]
    });
    fixture = TestBed.createComponent(OrderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
