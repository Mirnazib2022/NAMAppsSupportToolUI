import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { CityListComponent } from './city-list/city-list.component';
import { AddCityComponent } from './add-city/add-city.component';
import { AddEditEdiCustomerComponent } from './add-edit-edi-customer/add-edit-edi-customer.component';
import { EdiCustomerListComponent } from './edi-customer-list/edi-customer-list.component';
import { EdiCustomerTabContainerComponent } from './edi-customer-tab-container/edi-customer-tab-container.component';
import { OracleCustomerComponent } from './oracle-customer/oracle-customer.component';
import { OracleCustomerListComponent } from './oracle-customer-list/oracle-customer-list.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { SearchInvoicesComponent } from './search-invoices/search-invoices.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { OutputProfileSetupComponent } from './output-profile-setup/output-profile-setup.component';
import { ProfileSetupTabContainerComponent } from './profile-setup-tab-container/profile-setup-tab-container.component';




@NgModule({
  declarations: [
   
    CityListComponent,
    AddCityComponent,
    AddEditEdiCustomerComponent,
    EdiCustomerListComponent,
    EdiCustomerTabContainerComponent,
    OracleCustomerComponent,
    OracleCustomerListComponent,
    AddInvoiceComponent,
    SearchInvoicesComponent,
    ViewProfileComponent,
    OutputProfileSetupComponent,
    ProfileSetupTabContainerComponent

  ],
  imports: [
    CommonModule,
    MdbTabsModule,
    MdbFormsModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
    // MdbAccordionModule,
    // MdbCarouselModule,
    // MdbCheckboxModule,
    // MdbCollapseModule,
    // MdbDropdownModule,
    // MdbModalModule,
    // MdbPopoverModule,
    // MdbRadioModule,
    // MdbRangeModule,
    // MdbRippleModule,
    // MdbScrollspyModule,
    
    // MdbTooltipModule,
    // MdbValidationModule,
   // MdbModalRef,
   // MdbModalService,
  ]
})
export class FactModuleModule { }
