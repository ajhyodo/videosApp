import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrestranhoPage } from './drestranho.page';

const routes: Routes = [
  {
    path: '',
    component: DrestranhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrestranhoPageRoutingModule {}
