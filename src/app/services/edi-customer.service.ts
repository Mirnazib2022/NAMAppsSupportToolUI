import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class EdiCustomerService {

  constructor(private http: HttpClient) { }
  public getAllEdiCustomer() 
  { 
    return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_ALLEDICUSTOMER); 
  } 
  public getAllFactEdiCustomer() 
  { 
    return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_ALLFACTEDICUSTOMER); 
  } 

  public AddEdiCustomer(data: any, options?: any) 
  { 
    return this.http.post(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_ADD_EDICUSTOMER, data, options); 
    
  }
  public AddFactEdiCustomer(data: any, options?: any) 
  { 
    return this.http.post(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_ADD_FACT_EDICUSTOMER, data, options); 
    
  }
  public GetFactEdiCustomerById(data: number) 
  { 
    return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_FACTCUSTOMERBYID+data); 
    
  }
  public GetEdiCustomerById(data: number) 
  { 
    return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_EDICUSTOMERBYID+ data); 
    
  }
}
