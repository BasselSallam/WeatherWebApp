export interface Forecast {
  date: string;
  humidity: number;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
}

export interface WeatherApiResponse {
  city: string;
  forecast: Forecast[];
  id: number;
}
