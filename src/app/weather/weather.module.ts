import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from '../services/weather.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  providers:[WeatherService]
})
export class WeatherModule { }
