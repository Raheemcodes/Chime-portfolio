import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Favorite, Music, Playlist } from '../shared/shared.mdel';
import { SharedService } from '../shared/shared.service';
import { SortableStopEvent } from '@shopify/draggable';

@Component({
  selector: 'app-backdoor',
  templateUrl: './backdoor.component.html',
  styleUrls: ['./backdoor.component.scss'],
})
export class BackdoorComponent implements OnInit {
  musicForm = this.sharedService.musicForm;
  isSubmitting: boolean = false;
  isLoading: boolean = false;
  _isSubmitted: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getMusic();
  }

  set isSubmitted(val: boolean) {
    if (!val) return;
    this._isSubmitted = val;

    setTimeout(() => {
      this._isSubmitted = false;
    }, 3000);
  }

  get isSubmitted(): boolean {
    return this._isSubmitted;
  }

  get favoriteForm(): FormGroup {
    return <FormGroup>this.musicForm.get('favoriteForm');
  }

  get playlistFormArray() {
    return <FormArray<FormGroup>>this.musicForm.get('playlistFormArray');
  }

  getMusic(): void {
    this.isLoading = true;
    this.musicForm = this.sharedService.musicForm;

    if (!this.musicForm.value.favoriteForm?.musicName) {
      this.sharedService.fetchMusic().subscribe({
        complete: () => {
          this.musicForm = this.sharedService.musicForm;
          this.isLoading = false;
        },
      });
    } else {
      this.isLoading = false;
    }
  }

  update(e: any) {
    this.playlistFormArray.updateValueAndValidity(e);
  }

  onSubmit() {
    if (this.isLoading) return;
    this.isSubmitting = true;
    this.isSubmitted = false;

    const music: Music = {
      favorite: this.musicForm.value.favoriteForm as Favorite,
      playlists: this.musicForm.value.playlistFormArray as Playlist[],
    };

    this.sharedService.addMusic(music).subscribe({
      complete: () => {
        this.isSubmitting = false;
        this.isSubmitted = true;
      },
    });
  }
}
