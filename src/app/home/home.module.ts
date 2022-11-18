import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudyListModule } from '../case-study-list/case-study-list.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FooterModule } from '../footer/footer.module';
import { ClickDirective } from '../click.directive';
import { ResponseModule } from '../response/response.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CaseStudyListModule,
    FooterModule,
    ResponseModule,
    ClickDirective,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
