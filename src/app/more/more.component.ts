import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements OnInit {
  intent: string = encodeURIComponent('Hello @__sinofgluttony');

  constructor() {}

  ngOnInit(): void {}
}
