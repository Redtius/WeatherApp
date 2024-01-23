import { WeatherService } from './../weather.service';
import { Weather } from './../weather';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatInputModule,CommonModule,HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
weather:Weather|any;

constructor(private WeatherService:WeatherService){}

search(city:string){
  this.WeatherService.getWeather(city).subscribe(weather=>this.weather=weather);
}
}
