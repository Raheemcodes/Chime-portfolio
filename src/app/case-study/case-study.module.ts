import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudyComponent } from './case-study.component';
import { RouterModule } from '@angular/router';
import { CaseStudyListModule } from '../case-study-list/case-study-list.module';
import { FooterModule } from '../footer/footer.module';
import { ClickDirective } from '../click.directive';

@NgModule({
  declarations: [CaseStudyComponent],
  imports: [
    CommonModule,
    CaseStudyListModule,
    FooterModule,
    ClickDirective,
    RouterModule.forChild([{ path: '', component: CaseStudyComponent }]),
  ],
})
export class CaseStudyModule {}
