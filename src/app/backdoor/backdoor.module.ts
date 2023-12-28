import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdoorComponent } from './backdoor.component';
import { RouterModule } from '@angular/router';
import { PlaylistFormComponent } from './playlist-form/playlist-form.component';
import { PlaylistEditFormComponent } from './playlist-edit-form/playlist-edit-form.component';

@NgModule({
  declarations: [BackdoorComponent, PlaylistFormComponent, PlaylistEditFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BackdoorComponent }]),
  ],
})
export class BackdoorModule {}
