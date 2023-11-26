import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  Forecast,
  WeatherApiResponse,
} from 'src/app/pages/weather/models/weather.model';
import { WeatherService } from 'src/app/pages/weather/services/weather.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() citiesList!: WeatherApiResponse[];
  public selectedCity: WeatherApiResponse | undefined;
  public selectedForecast: Forecast | undefined;

  @Output() applyFiltration: EventEmitter<any> = new EventEmitter<any>();

  filterForm = new FormGroup({
    city: new FormControl(null),
    date: new FormControl(null),
  });
  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {}

  /**
   * Get the city ID based on the city name.
   *
   * @param {string} query - The name of the city to search for.
   * @returns {number | undefined} The ID of the city, or undefined if not found.
   */
  getCityId(query: string): number | undefined {
    return this.citiesList.find(
      (data: WeatherApiResponse) =>
        data.city.toLowerCase() === query.toLowerCase()
    )?.id;
  }

  /**
   * Filter the selected city's forecast by date.
   *
   * @param {string} date - The date to filter by.
   * @returns {Forecast | undefined} The forecast for the specified date, or undefined if not found.
   */
  filterByDate(date: string): void {
    this.selectedForecast = this.selectedCity?.forecast.find(
      (data: Forecast) => {
        if (data.date === date) {
          return data.date;
        } else return null;
      }
    );
  }

  /**
   * Apply the selected filter criteria and emit the filtered data.
   * If a city is selected, fetch its data; if a date is selected, filter by date.
   * Emits the filtered data through the `applyFiltration` event.
   *
   * @async
   */
  async applyFilter(){
    const formValue = this.filterForm.value;
    const cityId = this.getCityId(formValue.city ?? '');

    if (!formValue.city && !formValue.date) return;

    if (cityId) {
      this.selectedCity = await this._weatherService.getCityById(cityId);
    }

    if (formValue.date) this.filterByDate(formValue.date);

    this.applyFiltration.emit({
      selectedCity: this.selectedCity,
      selectedForecast: this.selectedForecast,
    });
  }

  reset() {
    this.filterForm.reset();
    this.applyFiltration.emit(null);
  }
}
