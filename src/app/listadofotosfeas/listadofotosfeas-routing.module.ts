import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadofotosfeasPage } from './listadofotosfeas.page';

const routes: Routes = [
  {
    path: '',
    component: ListadofotosfeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadofotosfeasPageRoutingModule {}
