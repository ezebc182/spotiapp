import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  artist: any = {};
  artists: any[] = [];
  baseUrl = 'https://api.spotify.com/v1/';
  country = 'US';
  limit = '20';
  term = '';
  // Replace for your own token
  token = 'BQDziRa4hBs92Lf45IseBjPsNA80x6Vu80vwGf7TmkjdoqU-SkPmiKS5mDpB2Yu8TyEcKkAPYcrtJyJv-xo';
  tracks: any[] = [];
  type = 'artist';

  constructor(public http: HttpClient) {}

  private getCredentials() {
    return {
      client_id: '33e39ecc43fc4887b12d8c8e38d7299c',
      client_secret: '21d51ef9ea3b47959cc7aaee266f7c76',
      grant_type: 'client_credentials'
    };
  }
  private getToken() {
    const URL = `https://accounts.spotify.com/api/token`;
      return this.http
        .post(URL, { body: this.getCredentials() })
        .subscribe( token => {
          console.log(token);
          // this.token = token;
        });
  }

  private getHeaders() {
    const headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Origin': '*'
    });

    return headers;
  }

  getArtist(id: string) {
    const URL = `${this.baseUrl}artists/${id}`;
    return this.http
      .get(URL, { headers: this.getHeaders() })
      .map((artist: any) => {
        // if (artist.error.status === 401) {
        //   this.getToken();
        //   this.getArtist(id);
        // }
        this.artist = artist;
        return this.artist;
      });
  }

  getArtists(term: string) {
    const URL = `${this.baseUrl}search?query=${term}&type=${this.type}&limit=${this.limit}`;
    this.term = term;
    return this.http
      .get(URL, { headers: this.getHeaders() })
      .map((resp: any) => {
        this.artists = resp.artists.items;
        return this.artists;
      });
  }

  getTopTracks(id: string) {
   const URL = `${this.baseUrl}artists/${id}/top-tracks?country=${this.country}`;
   return this.http
     .get(URL, { headers: this.getHeaders() })
     .map((res: any) => {
       this.tracks = res.tracks;
       console.log(this.tracks);
       return this.tracks;
     });
  }
}
