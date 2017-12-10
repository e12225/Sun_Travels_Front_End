import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesByAliasComponent } from './countries-by-alias.component';

describe('CountriesByAliasComponent', () => {
  let component: CountriesByAliasComponent;
  let fixture: ComponentFixture<CountriesByAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesByAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesByAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
