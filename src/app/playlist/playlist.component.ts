import { Music } from '../shared/shared.mdel';
import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  music!: Music;
  isLoading: boolean = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getMusic();
  }

  getMusic(): void {
    this.music = this.sharedService.music;

    if (!this.music) {
      this.sharedService.fetchMusic().subscribe({
        next: (music) => {
          this.music = music;
          setTimeout(() => {
            this.isLoading = false;
          }, 5000);
        },
      });
    } else {
      this.isLoading = false;
    }
  }
}
