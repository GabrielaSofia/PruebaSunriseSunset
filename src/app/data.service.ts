import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = 'https://api.sunrise-sunset.org/json';

  constructor( private http: HttpClient) { }

  getSunsetSunrise(lat:string, lng:string){
    let params = new HttpParams();
    params = params.set('lat', lat);
    params = params.set('lng', lng);

    return this.http.get(this.urlApi, {params});
  }

}
