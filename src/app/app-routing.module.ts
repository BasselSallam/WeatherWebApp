import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/weather/weather.module').then(
        (m) => m.WeatherModule
      ),
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./pages/error-404/error-404.module').then(
        (m) => m.Error404Module
      ),
  },
  { path: '**', redirectTo: '/errors' },// Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
