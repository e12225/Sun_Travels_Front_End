import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableReservationsComponent } from './available-reservations.component';

describe('AvailableReservationsComponent', () => {
  let component: AvailableReservationsComponent;
  let fixture: ComponentFixture<AvailableReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
