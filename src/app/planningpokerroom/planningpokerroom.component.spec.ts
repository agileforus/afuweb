import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningpokerroomComponent } from './planningpokerroom.component';

describe('PlanningpokerroomComponent', () => {
  let component: PlanningpokerroomComponent;
  let fixture: ComponentFixture<PlanningpokerroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningpokerroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningpokerroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
