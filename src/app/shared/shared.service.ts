import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, of } from 'rxjs';

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

  constructor(private router: Router) {
    this.populateFormArray();
  }

  get playlistFormArray() {
    return <FormArray<FormGroup>>this.musicForm.get('playlistFormArray');
  }

  populateFormArray(): void {
    for (let i: number = 0; i < 10; i++) {
      this.playlistFormArray.controls.push(
        new FormGroup({
          playlistName: new FormControl('', [...this.validation]),
          artist_genre: new FormControl('', [...this.validation]),
          spotifyLink: new FormControl('', [...this.validation]),
          appleMusicLink: new FormControl('', [...this.validation]),
        })
      );
    }
  }

  navigate(page: string) {
    return of('navigate')
      .pipe(delay(300))
      .subscribe(() => {
        this.router.navigate([page]);
      });
  }
}
