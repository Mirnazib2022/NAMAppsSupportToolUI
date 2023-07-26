import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OutputProfileService {

  constructor(private http: HttpClient) { }
  
  public AddProfile(data: any, options?: any) 
  { 
    return this.http.post(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_ADD_APPLICATION_VARIABLE, data, options); 
    
  }
  public getProfileById(data: number )
{
  return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_PROFILEBYID  + data );
}
}
