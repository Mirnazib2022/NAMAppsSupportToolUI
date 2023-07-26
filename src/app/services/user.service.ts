import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) 
  {

  }
  public getUsers() 
  { 
    return this.http.get(Constants.SENTINEL_API_ENDPOINT+Constants.ROUTE_GET_USERS); 
  } 

  public post(url: string, data: any, options?: any) 
  { 
    return this.http.post(url, data, options); 
    
  }
}
