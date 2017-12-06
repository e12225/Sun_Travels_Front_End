import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsByAliasComponent } from './hotels-by-alias.component';

describe('HotelsByAliasComponent', () => {
  let component: HotelsByAliasComponent;
  let fixture: ComponentFixture<HotelsByAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsByAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsByAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
