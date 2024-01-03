import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['../favorite-music/favorite-music.component.scss']
})
export class PlaylistFormComponent implements OnInit {
  @Input('form') form!: FormGroup
  @Input('index') index!: number

  constructor() { }

  get playlistName(){
    return this.form.get('playlistName')
  }

  get artist_genre(){
    return this.form.get('artist_genre')
  }

  get spotifyLink(){
    return this.form.get('spotifyLink')
  }

  get appleMusicLink(){
    return this.form.get('appleMusicLink')
  }


  ngOnInit(): void {
  }

}
