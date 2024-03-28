import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { GameModule } from './game/private/game.module';
import { MenuAppModule } from './menu-app/private/menu-app.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    GameModule,
    MenuAppModule,
    RouterModule.forRoot([]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
