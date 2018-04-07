import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  term = '';
  searching = false;


  constructor(public spotify: SpotifyService) {}

  ngOnInit() {
    this.term = this.spotify.term;

  }

  searchArtist() {

    if (this.term.length === 0) {
      this.searching = false;
      return;
    }

    this.spotify.getArtists(this.term).subscribe(artists => {
      this.searching = true;
    });
  }
}
