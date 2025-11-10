import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaApiPageRoutingModule } from './clima-api-routing.module';

import { ClimaApiPage } from './clima-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaApiPageRoutingModule
  ],
  declarations: [ClimaApiPage]
})
export class ClimaApiPageModule {}
