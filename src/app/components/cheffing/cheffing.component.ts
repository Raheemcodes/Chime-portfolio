import { Component, Input, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/experience/experience.model';

@Component({
  selector: 'app-cheffing',
  templateUrl: './cheffing.component.html',
  styleUrls: ['./cheffing.component.scss'],
})
export class CheffingComponent implements OnInit {
  @Input() experience!: ExperienceModel;

  constructor() {}

  ngOnInit(): void {}
}
