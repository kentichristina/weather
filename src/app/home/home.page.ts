import { WeatherService } from './../service/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
list;
weatherData;
city="Pretoria"
d = new Date();
  http: any;


  constructor(private service: WeatherService) {

 this.service.getweatherData(this.city).subscribe(data=>{
  this.list=data;
  this.city
 console.log(data);
 this.weatherData =this.list.list;
});
}
submit(city){
  this.service.getweatherData(this.city).subscribe(data=>{
    this.list=data;
    this.city
   console.log(data);
   this.weatherData =this.list.list;
});
}

}
