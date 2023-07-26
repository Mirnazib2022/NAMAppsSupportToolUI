import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, StatusPanelDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EdiCustomerService } from 'src/app/services/edi-customer.service';

@Component({
  selector: 'app-oracle-customer-list',
  templateUrl: './oracle-customer-list.component.html',
  styleUrls: ['./oracle-customer-list.component.css']
})
export class OracleCustomerListComponent implements OnInit {
  public cityForm:FormGroup;
  public statusBar: {
    statusPanels: StatusPanelDef[];
  } = {
    statusPanels: [
      { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
      { statusPanel: 'agTotalRowCountComponent', align: 'center' },
      { statusPanel: 'agFilteredRowCountComponent' },
      { statusPanel: 'agSelectedRowCountComponent' },
      { statusPanel: 'agAggregationComponent' },
    ],
  };
  public rowData$!: Observable<any[]>;
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private router: Router,private http: HttpClient,private fb:FormBuilder,
    private  _customerservice:EdiCustomerService
    ){
      this.cityForm=this.fb.group(
        {
          Id:'0',
          Name:''
        }
      )
    }


    public columnDefs: ColDef[] = [ ];

    public defaultColDef: ColDef = {
      sortable: true,
      filter: true,
      filterParams: {
        buttons: ['reset'],
      }
    };

    ngOnInit(): void {
      this.columnDefs = [
      { headerName: '',headerCheckboxSelection: true,
        checkboxSelection: true,sortable:false,filter:false},
        { headerName: 'ID',field: 'id'},
      { headerName: 'FACT_CustomerNum',field: 'factCustomerNum'},
      { headerName: 'Active',field: 'isActive'},
      { headerName: 'Create Date',field: 'createDate'},
      {headerName: 'Edit',sortable:false,filter:false,cellRenderer: () =>{
        return '<i class="fa fa-pencil" title="Edit" style="cursor:pointer;" ></i>';
      },cellStyle: {textAlign: 'center'},headerClass: "ag-center-header",}
    ];         
    }
    onGridReady(params: GridReadyEvent) {

      params.api.sizeColumnsToFit();
  
      this.rowData$ = this.http.get<any[]>(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_ALLFACTEDICUSTOMER);
  
        console.log(this.rowData$);
    }
    onCellClicked(e:any): void {
      if(e.column.colDef.headerName=="Edit")
      {
        this.router.navigate(['/addOracleCustomer'], { queryParams: { Id: e.data.id } });
        console.log('cellClicked', e);
      }
    }
    editRow() 
    {
        console.log("edit clicked!");
    }
    BackToAddCustomer()
  {
    this.router.navigate(['/addOracleCustomer']);
  }
  SearchCustomer()
  {
    this.rowData$ = this.http.get<any[]>(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_FACTEDICUSTOMERBYNAME+this.cityForm.get('Name')?.value);

    console.log(this.rowData$);
  }
}
