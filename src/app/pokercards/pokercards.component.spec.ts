import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokercardsComponent } from './pokercards.component';

describe('PokercardsComponent', () => {
  let component: PokercardsComponent;
  let fixture: ComponentFixture<PokercardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokercardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
