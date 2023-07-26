import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  public getAllCity() 
  { 
    return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_ALLCITY); 
  } 
public getCityByName(data: string )
{
  return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_CITYBYNAME  + data );
}
public getCityById(data: number )
{
  return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_CITYBYID  + data );
}
  public AddCity(data: any, options?: any) 
  { 
    return this.http.post(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_ADD_CITY, data, options); 
    
  }
}
