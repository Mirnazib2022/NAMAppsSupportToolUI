import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {

  constructor(private http: HttpClient) { }

  public getAppMenu() 
  { 
    return this.http.get(Constants.SENTINEL_API_ENDPOINT+Constants.ROUTE_GET_APP_MENU); 
  } 

  public post(url: string, data: any, options?: any) 
  { 
    return this.http.post(url, data, options); 
    
  }
}
