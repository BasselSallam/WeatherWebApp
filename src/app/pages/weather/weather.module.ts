import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule
  ]
})
export class WeatherModule { }
