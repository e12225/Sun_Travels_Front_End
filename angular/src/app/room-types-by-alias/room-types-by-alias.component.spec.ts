import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypesByAliasComponent } from './room-types-by-alias.component';

describe('RoomTypesByAliasComponent', () => {
  let component: RoomTypesByAliasComponent;
  let fixture: ComponentFixture<RoomTypesByAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypesByAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypesByAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
