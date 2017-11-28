import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReservationRequestComponent } from './search-reservation-request.component';

describe('SearchReservationRequestComponent', () => {
  let component: SearchReservationRequestComponent;
  let fixture: ComponentFixture<SearchReservationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchReservationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReservationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
