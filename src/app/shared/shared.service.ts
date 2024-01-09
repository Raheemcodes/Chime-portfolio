import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';
import { DataService } from './data.service';
import { Music } from './shared.mdel';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  validation = [Validators.required, Validators.minLength(5)];
  musicForm = new FormGroup({
    favoriteForm: new FormGroup({
      musicName: new FormControl('', [...this.validation]),
      spotifyLink: new FormControl('', [...this.validation]),
      appleLink: new FormControl('', [...this.validation]),
    }),
    playlistFormArray: new FormArray([] as FormGroup[]),
  });
  private _music!: Music;

  constructor(private router: Router, private dataService: DataService) {
    this.populateFormArray();
  }

  get playlistFormArray() {
    return <FormArray<FormGroup>>this.musicForm.get('playlistFormArray');
  }

  populateFormArray(): void {
    for (let i: number = 0; i < 10; i++) {
      this.playlistFormArray.push(
        new FormGroup({
          playlistName: new FormControl('', [...this.validation]),
          artist_genre: new FormControl('', [...this.validation]),
          spotifyLink: new FormControl('', [...this.validation]),
          appleLink: new FormControl('', [...this.validation]),
        })
      );
    }
  }

  setMusicForm(): void {
    this.musicForm = new FormGroup({
      favoriteForm: new FormGroup({
        musicName: new FormControl(this.music.favorite.musicName, [
          ...this.validation,
        ]),
        spotifyLink: new FormControl(this.music.favorite.spotifyLink, [
          ...this.validation,
        ]),
        appleLink: new FormControl(this.music.favorite.appleLink, [
          ...this.validation,
        ]),
      }),
      playlistFormArray: new FormArray(
        this.music.playlists.map((playlist) => {
          return new FormGroup({
            playlistName: new FormControl(playlist.playlistName, [
              ...this.validation,
            ]),
            artist_genre: new FormControl(playlist.artist_genre, [
              ...this.validation,
            ]),
            spotifyLink: new FormControl(playlist.spotifyLink, [
              ...this.validation,
            ]),
            appleLink: new FormControl(playlist.appleLink, [
              ...this.validation,
            ]),
          });
        })
      ),
    });
  }

  navigate(page: string) {
    return of('navigate')
      .pipe(delay(300))
      .subscribe(() => {
        this.router.navigate([page]);
      });
  }

  set music(data: Music) {
    this._music = data;
    this.setMusicForm();
  }

  get music(): Music {
    return this._music;
  }

  fetchMusic(): Observable<Music> {
    return this.dataService.fetchMusic().pipe(
      tap((music) => {
        console.log(music);
        this.music = music;
      })
    );
  }

  addMusic(music: Music): Observable<Music> {
    return this.dataService.addMusic(music).pipe(
      tap((music) => {
        this.music = music;
      })
    );
  }
}
