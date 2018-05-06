import { TestBed, inject } from '@angular/core/testing';

import { PokercardsService } from './pokercards.service';
import {Pokercard} from './pokercard';

describe('PokercardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokercardsService]
    });
  });
  it('should be created', inject([PokercardsService], (service: PokercardsService) => {
    expect(service).toBeTruthy();
  }));
  it('should be get list of poker cards', inject([PokercardsService], (service: PokercardsService) => {
    expect(service.pokercards.length).toBe(14);
  }));
  it('should be get one poker card', inject([PokercardsService], (service: PokercardsService) => {
    expect(service.getBySlug('one').name).toBe('Low hanging fruit');
  }));
  it('should be toggle state one poker card', inject([PokercardsService], (service: PokercardsService) => {
    const pokercard = service.getBySlug('one');
    expect(pokercard.state).toBe(Pokercard.HIDDEN);
    pokercard.setState(Pokercard.STOPPED);
    expect(pokercard.state).toBe(Pokercard.STOPPED);
  }));

});
