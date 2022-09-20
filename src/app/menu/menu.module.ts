import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { HomePage } from '../home/home.page';
import { ListaFotosPage } from '../lista-fotos/lista-fotos.page';
import { MisFotosPage } from '../mis-fotos/mis-fotos.page';
import { GraficosPage } from '../graficos/graficos.page';
import { ListadofotoslindasPage } from '../listadofotoslindas/listadofotoslindas.page';
import { ListadofotosfeasPage} from '../listadofotosfeas/listadofotosfeas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, HomePage, ListaFotosPage, MisFotosPage, GraficosPage, ListadofotoslindasPage, ListadofotosfeasPage]
})
export class MenuPageModule {}
