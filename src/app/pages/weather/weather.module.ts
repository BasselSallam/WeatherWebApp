import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
