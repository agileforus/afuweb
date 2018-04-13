import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class WallpapersService {

  wallpapers = [
    { 
      image: '/assets/wallpaper/wallpaper-0.jpg',
      color: "#000000"
    },
    { 
      image: '/assets/wallpaper/wallpaper-1.jpg',
      color: "#FFFFFF"
    }
  ];

  constructor( private cookieService: CookieService ) { }

  set() {
    var index = Math.floor(Math.random() * this.wallpapers.length);
    this.cookieService.set('wallpaper-index', String(index));
  }

  get() {
    return this.wallpapers[Number(this.cookieService.get('wallpaper-index'))];
  }

}
