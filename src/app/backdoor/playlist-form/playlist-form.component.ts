import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['../favorite-music/favorite-music.component.scss'],
})
export class PlaylistFormComponent implements OnInit {
  @Input('form') form!: FormGroup;
  @Input('index') index!: number;

  constructor() {}

  playlistName(form: FormGroup) {
    return form.get('playlistName');
  }

  artist_genre(form: FormGroup) {
    return form.get('artist_genre');
  }

  spotifyLink(form: FormGroup) {
    return form.get('spotifyLink');
  }

  appleMusicLink(form: FormGroup) {
    return form.get('appleMusicLink');
  }

  ngOnInit(): void {}
}
