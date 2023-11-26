import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { DatePipe } from '@angular/common';
import { Forecast, WeatherApiResponse } from '../models/weather.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [DatePipe],
})
export class ViewComponent implements OnInit {
  public todayDate = new Date();
  public citiesList: WeatherApiResponse[] = [];
  public selectedCity: WeatherApiResponse | undefined;
  public selectedForecast: Forecast | undefined;
  public degreeType: boolean = false;
  public tempCondition = '';

  constructor(
    private _weatherService: WeatherService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getCities();
    this.getCity(1);
  }

  /**
   * Asynchronously fetches all cities from the weather service and sets the result in the component.
   *
   * @async
   */
  async getCities() {
    const res = await this._weatherService.getAllCities();
    this.citiesList = res;
  }

  /**
   * Asynchronously fetches a city by its ID from the weather service.
   * Sets the fetched city as the selected city and fetches the today's forecast for the city.
   *
   * @async
   * @param {number} cityId - The ID of the city to fetch.
   */
  async getCity(cityId: number) {
    const res = await this._weatherService.getCityById(cityId);
    this.selectedCity = res;
    this.getTodayForecast(res);
  }

  /**
   * Asynchronously retrieves the forecast for the selected city for the current date.
   *
   * @async
   * @param {WeatherApiResponse} selectedCity - The selected city for which to fetch the forecast.
   */
  async getTodayForecast(selectedCity: WeatherApiResponse) {
    const formatDate = this.datePipe.transform(this.todayDate, 'yyyy-MM-dd');
    this.selectedForecast = await selectedCity.forecast.find(
      (data) => data.date === formatDate
    );
  }

  /**
   * Handles the change event for a degree checkbox.
   *
   * @param {Event} event - The event object triggered by the checkbox change.
   * @returns {void} This function does not return a value.
   */
  degree(event: Event): void {
    let eventValue = (event.target as HTMLInputElement).checked;
    if (eventValue) {
      this.degreeType = true;
    } else {
      this.degreeType = false;
    }
  }

  setFilteredValues(event: any) {
    if (event) {
      this.selectedCity = event.selectedCity;
      this.selectedForecast =
        event.selectedForecast ?? this.getTodayForecast(event.selectedCity);
    } else {
      this.getCity(1);
    }
  }
}
