import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFotosPageRoutingModule } from './lista-fotos-routing.module';

import { ListaFotosPage } from './lista-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFotosPageRoutingModule
  ],
  declarations: [ListaFotosPage]
})
export class ListaFotosPageModule {}
