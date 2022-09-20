import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadofotoslindasPageRoutingModule } from './listadofotoslindas-routing.module';

import { ListadofotoslindasPage } from './listadofotoslindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadofotoslindasPageRoutingModule
  ],
  declarations: [ListadofotoslindasPage]
})
export class ListadofotoslindasPageModule {}
