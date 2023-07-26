import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, StatusPanelDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';

@Component({
  selector: 'app-search-invoices',
  templateUrl: './search-invoices.component.html',
  styleUrls: ['./search-invoices.component.css']
})
export class SearchInvoicesComponent implements OnInit {
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
    private  _InvoiceService:InvoiceServiceService
    ){
      this.cityForm=this.fb.group(
        {
          Id:'0',
          InvoiceNum:'0'
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
      { headerName: 'InvoiceNum',field: 'invoiceNum'},
      { headerName: 'Retrigger',field: 'retrigger'},
      { headerName: 'Id',field: 'id'},
      { headerName: 'RecordDate',field: 'recordDate'},
      { headerName: 'CustomerNum',field: 'customerNum'},
      { headerName: 'SourceOfData',field: 'sourceOfData'},
      {headerName: 'Edit',sortable:false,filter:false,cellRenderer: () =>{
        return '<i class="fa fa-pencil" title="Edit" style="cursor:pointer;" ></i>';
      },cellStyle: {textAlign: 'center'},headerClass: "ag-center-header",}
    ];         
    }
    onGridReady(params: GridReadyEvent) {

      params.api.sizeColumnsToFit();
  
      this.rowData$ = this.http.get<any[]>(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_EDIINVOICES+this.cityForm.get('InvoiceNum')?.value);
  
        console.log(this.rowData$);
    }
    onCellClicked(e:any): void {
      if(e.column.colDef.headerName=="Edit")
      {
        this.router.navigate(['/InvoiceConfig'], { queryParams: { Id: e.data.id } });
       // console.log('cellClicked', e);
      }
    }
    editRow() 
    {
        console.log("edit clicked!");
    }
    BackToAddInvoice()
  {
    this.router.navigate(['/InvoiceConfig']);
  }
  SearchInvice()
  {
    this.rowData$ = this.http.get<any[]>(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_EDIINVOICES+this.cityForm.get('InvoiceNum')?.value);
  
    console.log(this.rowData$);
    
  }
}
