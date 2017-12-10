import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailsSearchComponent } from './contract-details-search.component';

describe('ContractDetailsSearchComponent', () => {
  let component: ContractDetailsSearchComponent;
  let fixture: ComponentFixture<ContractDetailsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDetailsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDetailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
