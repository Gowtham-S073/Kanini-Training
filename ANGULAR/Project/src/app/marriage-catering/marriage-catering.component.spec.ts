import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCateringComponent } from './marriage-catering.component';

describe('MarriageCateringComponent', () => {
  let component: MarriageCateringComponent;
  let fixture: ComponentFixture<MarriageCateringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarriageCateringComponent]
    });
    fixture = TestBed.createComponent(MarriageCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
