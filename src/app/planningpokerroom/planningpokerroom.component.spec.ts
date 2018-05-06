import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopmenuComponent } from '../topmenu/topmenu.component';
import { MatCardModule } from '@angular/material/card';

import { MatToolbarModule, MatIconModule, MatInputModule } from '@angular/material';

import { PlanningpokerroomComponent } from './planningpokerroom.component';
import { PokercardsService } from '../pokercards.service';

import 'hammerjs';

describe('PlanningpokerroomComponent', () => {
  let component: PlanningpokerroomComponent;
  let fixture: ComponentFixture<PlanningpokerroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlanningpokerroomComponent,
        TopmenuComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule
      ],
      providers: [
        PokercardsService
      ]
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
