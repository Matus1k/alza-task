import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from './models/route.enum';
import { Error404Page } from './pages/error404/error404.page';

const routes: Routes = [
  {
    path: Route.Home,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: Route.HeroList,
    loadChildren: () =>
      import('./pages/hero-list/hero-list.module').then(
        (m) => m.HeroListModule
      ),
  },
  {
    path: Route.HeroDetail + '/:id',
    loadChildren: () =>
      import('./pages/hero-detail/hero-detail.module').then(
        (m) => m.HeroDetailModule
      ),
  },
  {
    path: '',
    redirectTo: Route.Home,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Error404Page,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
