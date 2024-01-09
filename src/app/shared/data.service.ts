import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Music } from './shared.mdel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchMusic(): Observable<Music> {
    return this.http.get<Music>(environment.restAPI);
  }

  addMusic(music: Music): Observable<Music> {
    return this.http.put<Music>(environment.restAPI, music);
  }
}
