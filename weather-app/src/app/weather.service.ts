import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = "9591c22d24266e94a01e9f7ace621ba5"
  constructor(private http:HttpClient) { }
  getWeather(city:string):Observable<Weather>{
    const params= new HttpParams()
    .set('q',city)
    .set('units','metric')
    .set('appid',this.apiKey);

    return this.http.get<Weather>(this.apiUrl+'weather',{params});
  }
}
