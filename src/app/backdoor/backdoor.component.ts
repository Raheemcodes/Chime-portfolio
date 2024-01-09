import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { FormArray, FormGroup } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Favorite, Music, Playlist } from '../shared/shared.mdel';

@Component({
  selector: 'app-backdoor',
  templateUrl: './backdoor.component.html',
  styleUrls: ['./backdoor.component.scss'],
})
export class BackdoorComponent implements OnInit {
  musicForm = this.sharedService.musicForm;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  get favoriteForm(): FormGroup {
    return <FormGroup>this.musicForm.get('favoriteForm');
  }

  get playlistFormArray() {
    return <FormArray<FormGroup>>this.musicForm.get('playlistFormArray');
  }

  onSubmit() {
    console.log(this.musicForm.value);

    const music: Music = {
      favorite: this.musicForm.value.favoriteForm as Favorite,
      playlists: this.musicForm.value.playlistFormArray as Playlist[],
    };

    this.sharedService.addMusic(music).subscribe();
  }
}
