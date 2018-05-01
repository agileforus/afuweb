import { TestBed, inject } from '@angular/core/testing';

import { PokercardsService } from './pokercards.service';

describe('PokercardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokercardsService]
    });
  });

  it('should be created', inject([PokercardsService], (service: PokercardsService) => {
    expect(service).toBeTruthy();
  }));
});
