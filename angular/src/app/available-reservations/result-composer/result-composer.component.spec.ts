import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComposerComponent } from './result-composer.component';

describe('ResultComposerComponent', () => {
  let component: ResultComposerComponent;
  let fixture: ComponentFixture<ResultComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
