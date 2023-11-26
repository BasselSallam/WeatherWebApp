import { Injectable } from '@angular/core';
import { HttpAdapterService } from 'src/app/core/services/http-adapter.service';
import { environment } from 'src/environments/environment';
import { WeatherApiResponse } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(
    private _http: HttpAdapterService,
  ) {}

  async getAllCities(): Promise<WeatherApiResponse[]> {
    const res: WeatherApiResponse[] = await this._http.get(environment.base_url + 'forecast');
    return res;
  }

  async getCityById(cityId: number): Promise<WeatherApiResponse> {
    const res: WeatherApiResponse = await this._http.get(
      environment.base_url + `cityForecast/${cityId}`
    );
    return res;
  }
  
}
