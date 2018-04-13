import { TestBed, inject } from '@angular/core/testing';

import { WallpapersService } from './wallpapers.service';

describe('WallpapersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WallpapersService]
    });
  });

  it('should be created', inject([WallpapersService], (service: WallpapersService) => {
    expect(service).toBeTruthy();
  }));
});
