import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast, Weather } from './weather';
import { apiKey } from './apikey';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = apiKey; //create your file with your api key and name it "apikey.ts"
  private cities:string = '2643743,2988507,2553604,2527082,2561668,2542997';
  constructor(private http:HttpClient) { }
  getWeather(city:string):Observable<Weather>{
    const params= new HttpParams()
    .set('q',city)
    .set('units','metric')
    .set('appid',this.apiKey);

    return this.http.get<Weather>(this.apiUrl+'weather',{params});
  }

  getForecast():Observable<Forecast>{
    const params = new HttpParams()
    .set('id',this.cities)
    .set('units','metric')
    .set('appid',this.apiKey);

    return this.http.get<Forecast>(this.apiUrl+'group',{params});
  }
}
