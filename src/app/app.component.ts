import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SunsetSunrise';
  datos: any = [];
  latitud:string ="" ;
  longitud:string ="";

  constructor(
    private dataService : DataService
  ){}

  ngOnInit():void{
    this.cargarDatos(this.latitud,this.longitud);
  }

  cargarDatos(lat: string, lng: string){
    this.dataService.getSunsetSunrise(lat,lng)
        .subscribe(data =>{
          this.datos = data;
        })
    }
  }

    //this.dataService.getSunsetSunrise( this.datos.latitud, this.datos.longitud,).then(console.log);
    //this.resultado = this.dataService.getSunsetSunrise( this.datos.latitud, this.datos.longitud,);
    //this.datos.sunrise = this.resultado.sunrise;
    //this.datos.sunset = this.resultado.sunset;

  
