import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor(private http: HttpClient) { }
 

  public AddEdiInvoice(data: any, options?: any) 
  { 
    return this.http.post(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_ADD_EDI_INVOICES, data, options); 
    
  }
  public getInvoiceById(data: number) 
  { 
    return this.http.get(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_INVOICEBYID+data); 
    
  }
}
