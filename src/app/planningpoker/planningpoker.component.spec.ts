import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopmenuComponent } from '../topmenu/topmenu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule, MatIconModule, MatInputModule } from '@angular/material';

import { PlanningpokerComponent } from './planningpoker.component';

describe('PlanningpokerComponent', () => {
  let component: PlanningpokerComponent;
  let fixture: ComponentFixture<PlanningpokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlanningpokerComponent,
        TopmenuComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningpokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
