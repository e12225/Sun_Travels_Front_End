import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailsListComponent } from './contract-details-list.component';

describe('ContractDetailsListComponent', () => {
  let component: ContractDetailsListComponent;
  let fixture: ComponentFixture<ContractDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
