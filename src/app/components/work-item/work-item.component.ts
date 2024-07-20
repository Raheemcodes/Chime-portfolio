import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss'],
})
export class WorkItemComponent implements OnInit {
  @Input() service!: { image: string; title: string; desc: string };

  constructor() {}

  ngOnInit(): void {}
}
