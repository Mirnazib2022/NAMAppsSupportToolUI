import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SentinelService {

  constructor(private http: HttpClient) {

  }

  getApplications()
  {

  }
  getApplicationByID(appId:number)
  {

  }
  postApplication(application:any)
  {
    return this.http.post<any>(Constants.SENTINEL_API_ENDPOINT+Constants.ROUTE_ADD_APPLICATION, application);
  }
  updateApplication()
  {
    
  }
  deleteApplication()
  {

  }
}
