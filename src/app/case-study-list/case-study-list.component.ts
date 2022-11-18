import { Component, OnInit, Input } from '@angular/core';
import { CaseStudy } from '../shared/shared.mdel';

@Component({
  selector: 'app-case-study-list',
  templateUrl: './case-study-list.component.html',
  styleUrls: ['./case-study-list.component.scss'],
})
export class CaseStudyListComponent implements OnInit {
  @Input() caseStudyList!: CaseStudy[];

  constructor() {}

  ngOnInit(): void {}
}
