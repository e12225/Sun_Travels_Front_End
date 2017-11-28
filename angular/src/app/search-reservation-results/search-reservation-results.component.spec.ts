import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReservationResultsComponent } from './search-reservation-results.component';

describe('SearchReservationResultsComponent', () => {
  let component: SearchReservationResultsComponent;
  let fixture: ComponentFixture<SearchReservationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchReservationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReservationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
