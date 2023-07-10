import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialCateringComponent } from './industrial-catering.component';

describe('IndustrialCateringComponent', () => {
  let component: IndustrialCateringComponent;
  let fixture: ComponentFixture<IndustrialCateringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialCateringComponent]
    });
    fixture = TestBed.createComponent(IndustrialCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
