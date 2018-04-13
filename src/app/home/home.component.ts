import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { WallpapersService } from '../wallpapers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("afutitle") afutitle : ElementRef;
  @ViewChild("afufooter") afufooter : ElementRef;

  constructor(
    private renderer : Renderer2,
    private wallpapers : WallpapersService
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.afutitle.nativeElement, "color", this.wallpapers.get()["color"]);
    this.renderer.setStyle(this.afufooter.nativeElement, "color", this.wallpapers.get()["color"]);
  }

}
