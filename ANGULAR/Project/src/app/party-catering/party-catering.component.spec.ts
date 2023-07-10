import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCateringComponent } from './party-catering.component';

describe('PartyCateringComponent', () => {
  let component: PartyCateringComponent;
  let fixture: ComponentFixture<PartyCateringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartyCateringComponent]
    });
    fixture = TestBed.createComponent(PartyCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
