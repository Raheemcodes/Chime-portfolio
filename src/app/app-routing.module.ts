import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'case-study',
    loadChildren: () =>
      import('./case-study/case-study.module').then((m) => m.CaseStudyModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'more',
    loadChildren: () => import('./more/more.module').then((m) => m.MoreModule),
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./playlist/playlist.module').then((m) => m.PlaylistModule),
  },
  {
    path: 'backdoor',
    loadChildren: () =>
      import('./backdoor/backdoor.module').then((m) => m.BackdoorModule),
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
