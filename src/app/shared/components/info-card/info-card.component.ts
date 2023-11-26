import { Component, Input } from '@angular/core';
import { Forecast } from 'src/app/pages/weather/models/weather.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() weatherInfo!: Forecast;
}
