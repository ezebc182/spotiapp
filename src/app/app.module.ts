import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './components/artist/artist.component';

// Pipes
import { SecuredomPipe } from './pipes/securedom.pipe';
import { FotosPipe } from './pipes/fotos.pipe';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent, NavbarComponent, FotosPipe, ArtistComponent, SecuredomPipe],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule, FormsModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
