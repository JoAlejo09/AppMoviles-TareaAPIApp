import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaApiPage } from './clima-api.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaApiPageRoutingModule {}
