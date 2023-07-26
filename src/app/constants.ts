import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
    public static TITLE: string = " NAMAPPSUPPORTTOOLUI"; 
    public static readonly SENTINEL_API_ENDPOINT: string = 'https://localhost:44315/api/Sentinel/'; 
    public static readonly WIT_API_ENDPOINT: string = 'https://localhost:44315/api/Lift/';

    public static readonly ROUTE_GET_USERS: string = 'GetUsers'; 
    public static readonly ROUTE_GET_APP_MENU: string = 'GetAppMenu'; 
    public static readonly ROUTE_GET_APPLICATION: string = 'GetApplication'; 
    public static readonly ROUTE_ADD_APPLICATION: string = 'AddApplication'; 

  /*Fact API's' */
  public static readonly LIFT_API_ADD_CITY: string = 'AddCity'; 
  public static readonly LIFT_API_GET_ALLCITY: string = 'GetAllCity'; 
  public static readonly LIFT_API_ADD_EDICUSTOMER: string = 'AddEdiCustomer'; 
  public static readonly LIFT_API_ADD_FACT_EDICUSTOMER: string = 'AddFactEdiCustomer'; 
  public static readonly LIFT_API_ADD_EDI_INVOICES: string = 'AddEdiInvoices'; 
  public static readonly LIFT_API_ADD_APPLICATION_VARIABLE: string = 'AddApplicationVariable'; 
  public static readonly LIFT_API_GET_CITYBYNAME: string = 'GetCityByName/'; 
  public static readonly LIFT_API_GET_CITYBYID: string = 'GetCityById/'; 
  public static readonly LIFT_API_GET_ALLEDICUSTOMER: string = 'GetAllEdiCustomer/'; 
  public static readonly LIFT_API_GET_EDICUSTOMERBYNAME: string = 'GetEdiCustomerByName/'; 
  public static readonly LIFT_API_GET_ALLFACTEDICUSTOMER: string = 'GetAllfactEdiCustomer'; 
  public static readonly LIFT_API_GET_FACTEDICUSTOMERBYNAME: string = 'GetfactEdiCustomerByName/'; 
  public static readonly LIFT_API_GET_EDIINVOICES: string = 'GetAllEdiInvoices/';  
  public static readonly LIFT_API_GET_PROFILEBYPROFILEID: string = 'getApplicationVariable/'; 
  public static readonly LIFT_API_GET_PROFILEBYID: string = 'getProfileById/';
  public static readonly LIFT_API_GET_EDICUSTOMERBYID: string = 'GetEdiCustomerById/';
  public static readonly LIFT_API_GET_FACTCUSTOMERBYID: string = 'GetfactEdiCustomerById/';
  public static readonly LIFT_API_GET_INVOICEBYID: string = 'GetEdiInvoicesById/'; 


    // public static readonly USER_API_ENDPOINT: string = 'https://localhost:44315/api/user'; 
    //public static readonly MENU_API_ENDPOINT: string = 'https://localhost:44315/api/AppMenu'; 
    //public static readonly APPLICATION_API_ENDPOINT: string = 'https://localhost:44315/api/Application/'; 
    //public static readonly ADD_APPLICATION_API_ENDPOINT: string = 'https://localhost:44315/api/Application/AddApplication'; 
} 