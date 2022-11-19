import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  intent: string = encodeURIComponent('Hello @__sinofgluttony');

  constructor() {}

  ngOnInit(): void {}
}
