import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { ClickDirective } from '../click.directive';
import { ResponseModule } from '../response/response.module';
import { FooterModule } from '../footer/footer.module';
import { AnimationDirective } from '../animation.directive';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    ClickDirective,
    ResponseModule,
    FooterModule,
    AnimationDirective,
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
  ],
})
export class AboutModule {}
