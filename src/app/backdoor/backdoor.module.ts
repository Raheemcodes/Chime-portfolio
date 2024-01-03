import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackdoorComponent } from './backdoor.component';
import { FavoriteMusicComponent } from './favorite-music/favorite-music.component';
import { PlaylistFormComponent } from './playlist-form/playlist-form.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';

@NgModule({
  declarations: [
    BackdoorComponent,
    PlaylistFormComponent,
    FavoriteMusicComponent,ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: BackdoorComponent }]),
  ],
})
export class BackdoorModule {}
