import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Ddconfig1Component } from './ddconfig1/ddconfig1.component';
import { AuthenticateService } from './services/authenticate.service';
import { UserViewComponent } from './Configuration/user-view/user-view.component';
import { ErrorComponent } from './error/error.component';
import { UserAddModalComponent } from './user-add-modal/user-add-modal.component';
import { ApplicationViewComponent } from './Configuration/application-view/application-view.component';
import { ApplicationTabContainerComponent } from './Configuration/application-tab-container/application-tab-container.component';
import { AddCityComponent } from './Fact/add-city/add-city.component';
import { CityListComponent } from './Fact/city-list/city-list.component';
import { AddEditEdiCustomerComponent } from './Fact/add-edit-edi-customer/add-edit-edi-customer.component';
import { EdiCustomerListComponent } from './Fact/edi-customer-list/edi-customer-list.component';
import { OracleCustomerComponent } from './Fact/oracle-customer/oracle-customer.component';
import { OracleCustomerListComponent } from './Fact/oracle-customer-list/oracle-customer-list.component';
import { EdiCustomerTabContainerComponent } from './Fact/edi-customer-tab-container/edi-customer-tab-container.component';
import { AddInvoiceComponent } from './Fact/add-invoice/add-invoice.component';
import { SearchInvoicesComponent } from './Fact/search-invoices/search-invoices.component';
import { OutputProfileSetupComponent } from './Fact/output-profile-setup/output-profile-setup.component';
import { ViewProfileComponent } from './Fact/view-profile/view-profile.component';
import { ProfileSetupTabContainerComponent } from './Fact/profile-setup-tab-container/profile-setup-tab-container.component';



const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'',component:HomeComponent , canActivate: [AuthenticateService]},
    { path: 'DDConfig1', component: Ddconfig1Component},
    { path: 'userview', component: UserViewComponent, canActivate: [AuthenticateService] },
    { path: 'error', component: ErrorComponent, canActivate: [AuthenticateService] },
    { path: 'appConfig', component: ApplicationTabContainerComponent, canActivate: [AuthenticateService] },
    { path: 'UAM', component: UserAddModalComponent },
    { path: 'appview', component: ApplicationViewComponent },
    { path: 'addcity', component: AddCityComponent },    
    {path:'viewcity',component:CityListComponent},  
    {path:'addEdiCustomer',component:AddEditEdiCustomerComponent},  
    {path:'viewEdiCustomer',component:EdiCustomerListComponent},  
    {path:'addOracleCustomer',component:OracleCustomerComponent},   
    {path:'viewOracleCustomer',component:OracleCustomerListComponent},  
    {path:'EdiCustomerConfig',component:EdiCustomerTabContainerComponent},  
    {path:'InvoiceConfig',component:AddInvoiceComponent},
    {path:"SearchInvoice",component:SearchInvoicesComponent},
    {path:'addApplicationVariable',component:OutputProfileSetupComponent},
    {path:'viewApplicationVariable',component:ViewProfileComponent},
    {path:'OutputprofileConfig',component:ProfileSetupTabContainerComponent}
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
