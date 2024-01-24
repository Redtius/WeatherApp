import { WeatherService } from './../weather.service';
import { Forecast, Weather } from './../weather';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatInputModule,CommonModule,HttpClientModule,MatGridListModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit{
weather:Weather|any;
forecast:Weather[]=[];
city:string[]=['London','Paris','Madrid','Barcelona','Berlin','Rome'];
loading:boolean=false;


constructor(private WeatherService:WeatherService){}

search(city:string){
  this.WeatherService.getWeather(city).subscribe(weather=>this.weather=weather);
}

ngOnInit(){
  this.loading=true;
  console.log(this.loading);
  this.city.forEach(city=>
    {
      this.WeatherService.getWeather(city).subscribe(weather=>this.forecast.push(weather));
    });
    console.log(this.forecast);
  this.loading=false;
  console.log(this.loading);
}

}
