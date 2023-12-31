import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error-404-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    Error404RoutingModule
  ]
})
export class Error404Module { }
