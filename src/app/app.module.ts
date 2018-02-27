import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {app_routing} from './app.routes';

import {FormsModule} from '@angular/forms';
//Services
import {SpotifyService} from './services/spotify.service';
import {HttpClientModule} from '@angular/common/http';

//pipes
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NoimgPipe } from './pipes/noimg.pipe';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoimgPipe,
    ArtistComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
