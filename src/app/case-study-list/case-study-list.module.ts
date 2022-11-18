import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CaseStudyListComponent } from './case-study-list.component';

@NgModule({
  declarations: [CaseStudyListComponent],
  imports: [CommonModule],
  exports: [CaseStudyListComponent],
})
export class CaseStudyListModule {}
