import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractDetailsComponent } from './add-contract-details.component';

describe('AddContractDetailsComponent', () => {
  let component: AddContractDetailsComponent;
  let fixture: ComponentFixture<AddContractDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContractDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
