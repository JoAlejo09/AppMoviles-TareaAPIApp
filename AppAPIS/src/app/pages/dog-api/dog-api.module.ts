import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogApiPageRoutingModule } from './dog-api-routing.module';

import { DogApiPage } from './dog-api.page';
import { HttpClientModule } from '@angular/common/http';  
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogApiPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [DogApiPage]
})
export class DogApiPageModule {}
