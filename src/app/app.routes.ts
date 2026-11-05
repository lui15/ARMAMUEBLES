import { Route, Routes } from '@angular/router';

import { PAGINAS } from './landing/landing-data';

const rutasLanding: Routes = PAGINAS.map(
  (pagina): Route => ({
    path: pagina.path,
    pathMatch: 'full',
    loadComponent: () => import('./landing/landing-page').then((m) => m.LandingPage),
    data: { slug: pagina.path },
  }),
);

export const routes: Routes = [
  ...rutasLanding,
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
