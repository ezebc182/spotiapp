import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  tracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, public spotify: SpotifyService) {}

  ngOnInit() {
    this.activatedRoute.params
    .map((params) => {
      return params['id'];
    })
    .subscribe( (id) => {
      this.spotify.getArtist(id)
        .subscribe(artist => this.artist = artist);
      this.spotify.getTopTracks(id)
        .subscribe(tracks => this.tracks = tracks);
    });

  }

}
