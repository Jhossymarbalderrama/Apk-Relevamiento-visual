import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFotosPage } from './lista-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFotosPageRoutingModule {}
