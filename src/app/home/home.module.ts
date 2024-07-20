import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationDirective } from '../animation.directive';
import { CaseStudyListModule } from '../case-study-list/case-study-list.module';
import { ClickDirective } from '../click.directive';
import { FooterModule } from '../footer/footer.module';
import { ResponseModule } from '../response/response.module';
import { HomeComponent } from './home.component';
import { WorkItemComponent } from '../components/work-item/work-item.component';

@NgModule({
  declarations: [HomeComponent, WorkItemComponent],
  imports: [
    CommonModule,
    CaseStudyListModule,
    FooterModule,
    ResponseModule,
    ClickDirective,
    AnimationDirective,
    NgOptimizedImage,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
