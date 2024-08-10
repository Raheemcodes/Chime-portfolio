import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { RouterModule } from '@angular/router';
import { CheffingComponent } from '../components/cheffing/cheffing.component';

@NgModule({
  declarations: [ExperienceComponent, CheffingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ExperienceComponent }]),
  ],
})
export class ExperienceModule {}
