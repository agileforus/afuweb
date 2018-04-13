import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { WallpapersService } from './wallpapers.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef,
    private wallpapers: WallpapersService ) {}

  ngOnInit() {
    this.wallpapers.set();
    this.renderer.setStyle(this.el.nativeElement,"background-image", "url('"+this.wallpapers.get()['image']+"'");
  }

  initials = 'AFU';
  title = 'Agile For Us';

}
