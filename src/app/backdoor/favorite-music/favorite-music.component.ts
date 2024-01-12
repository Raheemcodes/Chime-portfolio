import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-favorite-music',
  templateUrl: './favorite-music.component.html',
  styleUrls: ['./favorite-music.component.scss'],
})
export class FavoriteMusicComponent implements OnInit {
  @Input('form') form!: FormGroup;
  @Input('isLoading') isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  get musicName() {
    return this.form.get('musicName');
  }

  get spotifyLink() {
    return this.form.get('spotifyLink');
  }

  get appleLink() {
    return this.form.get('appleLink');
  }
}
