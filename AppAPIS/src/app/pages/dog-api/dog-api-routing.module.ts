import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogApiPage } from './dog-api.page';

const routes: Routes = [
  {
    path: '',
    component: DogApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogApiPageRoutingModule {}
