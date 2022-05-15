import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrestranhoPageRoutingModule } from './drestranho-routing.module';

import { DrestranhoPage } from './drestranho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrestranhoPageRoutingModule
  ],
  declarations: [DrestranhoPage]
})
export class DrestranhoPageModule {}
