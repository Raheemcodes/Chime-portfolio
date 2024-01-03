import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from './shared.mdel';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _music: Music = {
    favorite: { musicName: '', spotifyLink: '', appleLink: '' },
    playlists: [],
  };

  constructor(private http: HttpClient) {}

  set music(data: Music) {
    this._music = data;
  }

  get music(): Music {
    return this._music;
  }

  addMusic(music: Music): Observable<Music> {
    return this.http.put<Music>(environment.restAPI, music).pipe(
      tap((data) => {
        music = data;
      })
    );
  }
}
