import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
appid='e3dcb73506604e074dd58324bc652b36'
  constructor(private  http:HttpClient) { }

  getweatherData(city:string){
     return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ city+'&units=metric&APPID='+this.appid);
  }

}


