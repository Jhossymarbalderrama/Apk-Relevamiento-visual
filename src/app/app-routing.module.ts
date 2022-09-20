import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'lista-fotos',
    loadChildren: () => import('./lista-fotos/lista-fotos.module').then( m => m.ListaFotosPageModule)
  },
  {
    path: 'mis-fotos',
    loadChildren: () => import('./mis-fotos/mis-fotos.module').then( m => m.MisFotosPageModule)
  },
  {
    path: 'graficos',
    loadChildren: () => import('./graficos/graficos.module').then( m => m.GraficosPageModule)
  },
  {
    path: 'listadofotosfeas',
    loadChildren: () => import('./listadofotosfeas/listadofotosfeas.module').then( m => m.ListadofotosfeasPageModule)
  },
  {
    path: 'listadofotoslindas',
    loadChildren: () => import('./listadofotoslindas/listadofotoslindas.module').then( m => m.ListadofotoslindasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
