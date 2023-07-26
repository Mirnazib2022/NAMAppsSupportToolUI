import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Ddconfig1Component } from './ddconfig1/ddconfig1.component';
import { HttpClientModule } from '@angular/common/http';
import { UserViewComponent } from './Configuration/user-view/user-view.component';
import { ErrorComponent } from './error/error.component'
//import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UserAddModalComponent } from './user-add-modal/user-add-modal.component';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
// import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
// import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
// import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
// import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
// import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
// import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
// import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
// import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
// import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
// import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationViewComponent } from './Configuration/application-view/application-view.component';
import { ApplicationTabContainerComponent } from './Configuration/application-tab-container/application-tab-container.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddeditapplicationmodalComponent } from './Configuration/ModalPopUp/addeditapplicationmodal/addeditapplicationmodal.component';
import { AddeditusermodalComponent } from './Configuration/ModalPopUp/addeditusermodal/addeditusermodal.component';
import {MatSelectModule} from '@angular/material/select';
import { FactModuleModule } from './Fact/fact-module.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Ddconfig1Component,
    UserViewComponent,
    ErrorComponent,
    UserAddModalComponent,
    ApplicationViewComponent,
    ApplicationTabContainerComponent,
    AddeditapplicationmodalComponent,
    AddeditusermodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdbTabsModule,
    BrowserAnimationsModule,
    MdbFormsModule,
    MdbModalModule,
    FactModuleModule,
    // MdbAccordionModule,
    // MdbCarouselModule,
    // MdbCheckboxModule,
    // MdbCollapseModule,
    // MdbDropdownModule,
    
    // MdbPopoverModule,
    // MdbRadioModule,
    // MdbRangeModule,
    // MdbRippleModule,
    // MdbScrollspyModule,
    
    // MdbTooltipModule,
    // MdbValidationModule,
   // MdbModalRef,
   // MdbModalService,
   AgGridModule,
   MatSelectModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
