import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, StatusPanelDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
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
    private  _Cityservice:CityService
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
        { headerName: 'City Code',field: 'id'},
      { headerName: 'City Name',field: 'name'},
      {headerName: 'Edit',sortable:false,filter:false,cellRenderer: () =>{
        return '<i class="fa fa-pencil" title="Edit" style="cursor:pointer;" ></i>';
      },cellStyle: {textAlign: 'center'},headerClass: "ag-center-header",}
    ];         
    }
    onGridReady(params: GridReadyEvent) {

      params.api.sizeColumnsToFit();
  
      this.rowData$ = this.http.get<any[]>(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_ALLCITY);
  
        console.log(this.rowData$);
    }
    onCellClicked(e:any): void {
      if(e.column.colDef.headerName=="Edit")
      {
        
       // console.log('cellClicked', e);
       // this.router.navigate(['/addcity?Id='+e.data.id]);
       this.router.navigate(['/addcity'], { queryParams: { Id: e.data.id } });
      }
    }
    editRow() 
    {
      alert('Clicked');
        console.log("edit clicked!");
    }
  BackToAddCity()
  {
    this.router.navigate(['/addcity']);
  }
  SearchCity()
  {

    this.rowData$ = this.http.get<any[]>(Constants.WIT_API_ENDPOINT+Constants.LIFT_API_GET_CITYBYNAME+this.cityForm.get('Name')?.value);

      console.log(this.rowData$);    
  }
}
