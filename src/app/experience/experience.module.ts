import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheffingComponent } from '../components/cheffing/cheffing.component';
import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [ExperienceComponent, CheffingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ExperienceComponent }]),
  ],
})
export class ExperienceModule {}
