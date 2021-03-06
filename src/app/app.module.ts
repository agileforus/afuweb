import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';

registerLocaleData(localePt, 'pt-BR', localePtExtra);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DeviceDetectorModule } from 'ngx-device-detector';
import { CookieService } from 'ngx-cookie-service';

import { MatToolbarModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeComponent } from './home/home.component';
import { PlanningpokerComponent } from './planningpoker/planningpoker.component';

import { AppRoutingModule } from './app-routing.module';
import { WallpapersService } from './wallpapers.service';
import { PlanningpokerroomComponent } from './planningpokerroom/planningpokerroom.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanningpokerComponent,
    PlanningpokerroomComponent,
    TopmenuComponent,
    FooterComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,

    AppRoutingModule,

    DeviceDetectorModule.forRoot()

  ],
  providers: [
    WallpapersService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
