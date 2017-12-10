import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesByAliasComponent } from './cities-by-alias.component';

describe('CitiesByAliasComponent', () => {
  let component: CitiesByAliasComponent;
  let fixture: ComponentFixture<CitiesByAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesByAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesByAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
