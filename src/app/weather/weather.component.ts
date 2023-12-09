import { Component } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  city: string = '';
  recentLocations: any[] = [];
  selectedLocation: any;

  constructor(private weatherService: WeatherService) {}


  removeCity(index: number) {
    this.recentLocations.splice(index, 1);
  }

  clearAll() {
    this.recentLocations = [];
  }

  trimLocations() {
    if (this.recentLocations.length > 8) {
      this.recentLocations.pop();
    }
  }

  refreshForecast() {
    // Call forecast API for the selected location
    // Update the right panel with detailed weather information and 5-day forecast
  }

  addCity() {
    this.weatherService.getCurrentWeather(this.city).subscribe(
      (response: any) => {
        let newLocation:any = {
          city: response.name,
          temperature: `${response.main.temp}°C`,
          weatherStatus: response.weather[0].description,
          wind: `${response.wind.speed} m/s`,
          pressure: `${response.main.pressure} hPa`,
        };
        this.recentLocations.unshift(newLocation);
        this.trimLocations();
        this.city = '';

        const lat = response.coord.lat;
        const lon = response.coord.lon;
        this.weatherService.getWeatherForecast(lat, lon).subscribe(
          (forecastResponse: any) => {
            // Assuming that the next 5 days' temperatures are available in the 'daily' array
            const nextFiveDays = forecastResponse.daily.slice(1, 6);
            newLocation['forecast'] = nextFiveDays.map((day: any) => ({
              date: new Date(day.dt * 1000),
              temperature: `${day.temp.day}°C`,
              weatherStatus: day.weather[0].description,
              wind: `${day.wind_speed} m/s`,
              pressure: `${day.pressure} hPa`,
            }));
          },
          (error) => {
            console.error('Error fetching weather forecast:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching current weather data:', error);
        // Handle error, show error message to the user
      }
    );
  }

  refreshWeather(location: any) {
    this.weatherService.getCurrentWeather(location.city).subscribe(
      (response: any) => {
        location.temperature = `${response.main.temp}°C`;
        location.weatherStatus = response.weather[0].description;
      },
      (error) => {
        console.error('Error refreshing weather data:', error);
        // Handle error, show error message to the user
      }
    );
  }



}
