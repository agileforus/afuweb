import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { WallpapersService } from '../wallpapers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
