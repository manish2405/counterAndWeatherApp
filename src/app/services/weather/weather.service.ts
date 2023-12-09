import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'd4594364698122bfd1c4b3eb5f2ff19f'; // Replace with your actual API key
  private currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/onecall';


  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
    };

    return this.http.get(this.currentWeatherUrl, { params });
  }

  getWeatherForecast(lat: number, lon: number): Observable<any> {
    const params = {
      lat: lat.toString(),
      lon: lon.toString(),
      appid: this.apiKey,
      exclude: 'current,minutely,hourly',
    };

    return this.http.get(this.forecastUrl, { params });
  }
}
