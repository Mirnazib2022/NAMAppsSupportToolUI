import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, StatusPanelDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants';
import { AddeditapplicationmodalComponent } from '../ModalPopUp/addeditapplicationmodal/addeditapplicationmodal.component';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent implements OnInit{

  modalRef: MdbModalRef<AddeditapplicationmodalComponent> | null = null;

  

  public columnDefs: ColDef[] = [ ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    filterParams: {
      buttons: ['reset'],
    }
  };
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

  constructor(private http: HttpClient,private modalService: MdbModalService) {
  }

  ngOnInit(): void {
    this.columnDefs = [
    { headerName: '',headerCheckboxSelection: true,
      checkboxSelection: true,sortable:false,filter:false},
    { headerName: 'Application',field: 'appName'},
    { headerName:'Sequence' ,field: 'sequence' },
    { headerName:'Created On' ,field: 'createdOn'},
    {headerName: 'Edit',sortable:false,filter:false,cellRenderer: () =>{
      return '<i class="fa fa-pencil" title="Edit" style="cursor:pointer;" ></i>';
    },cellStyle: {textAlign: 'center'},headerClass: "ag-center-header",}
  ];

       
  }

  onGridReady(params: GridReadyEvent) {

    params.api.sizeColumnsToFit();

    this.rowData$ = this.http
      .get<any[]>(Constants.SENTINEL_API_ENDPOINT+Constants.ROUTE_GET_APPLICATION);

      console.log(this.rowData$);
  }

  onCellClicked(e:any): void {
    if(e.column.colDef.headerName=="Edit")
    {
      console.log('cellClicked', e);
    }
  }
  editRow() 
  {
      console.log("edit clicked!");
  }
  openApplicationModal() {
    this.modalRef = this.modalService.open(AddeditapplicationmodalComponent)
    this.modalRef?.onClose.subscribe(() => {
      console.log('closed');
    });
  }
}
