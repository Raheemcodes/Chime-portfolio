import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { ClickDirective } from '../click.directive';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    ClickDirective,
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
  ],
})
export class AboutModule {}
