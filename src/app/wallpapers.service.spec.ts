import { TestBed, inject } from '@angular/core/testing';

import { WallpapersService } from './wallpapers.service';
import { CookieService } from 'ngx-cookie-service';

describe('WallpapersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WallpapersService,
        CookieService
      ]
    });
  });

  it('should be created', inject([WallpapersService], (service: WallpapersService) => {
    expect(service).toBeTruthy();
  }));
});
