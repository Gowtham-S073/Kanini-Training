import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCateringComponent } from './corporate-catering.component';

describe('CorporateCateringComponent', () => {
  let component: CorporateCateringComponent;
  let fixture: ComponentFixture<CorporateCateringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateCateringComponent]
    });
    fixture = TestBed.createComponent(CorporateCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
