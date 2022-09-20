import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadofotosfeasPageRoutingModule } from './listadofotosfeas-routing.module';

import { ListadofotosfeasPage } from './listadofotosfeas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadofotosfeasPageRoutingModule
  ],
  declarations: [ListadofotosfeasPage]
})
export class ListadofotosfeasPageModule {}
