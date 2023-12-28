import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PlaylistComponent }]),
  ],
})
export class PlaylistModule {}
