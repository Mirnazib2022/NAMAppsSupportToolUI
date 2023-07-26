import {AfterViewInit, Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EdiCustomerService } from 'src/app/services/edi-customer.service';

@Component({
  selector: 'app-add-edit-edi-customer',
  templateUrl: './add-edit-edi-customer.component.html',
  styleUrls: ['./add-edit-edi-customer.component.css']
})
export class AddEditEdiCustomerComponent implements OnInit {
  public cityForm:FormGroup;
  Id: number = 0;
  constructor(private router: Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private  _Customerservice:EdiCustomerService
    ){
      
      this.route.queryParams.subscribe(params => {
        this.Id = params['Id'];
      });

this.cityForm=this.fb.group(
  {
    Id:'0',    
    FactCode:'',
    active:false,
    CustomerName:'',
    EdiWindowBegin:'',
    EdiWindowEnd:'',
    ProfileId:'',
    SaveLocation:'',
    clientCode:''
  }
)
    }
  ngOnInit(): void {
    this.getEdiCustomer();
  }
  
  ngAfterViewInit() {
    
  }

  getEdiCustomer() {
    if (this.Id > 0) {

      this._Customerservice.GetEdiCustomerById(this.Id).pipe().subscribe((res: any) => {

        let data = res;
        this.cityForm.controls['FactCode'].setValue(data[0].factCustomerNum);
        this.cityForm.controls['CustomerName'].setValue(data[0].customerName);        
        this.cityForm.controls['active'].setValue(data[0].active);
        this.cityForm.controls['EdiWindowBegin'].setValue(data[0].ediWindowBegin);
        this.cityForm.controls['EdiWindowEnd'].setValue(data[0].ediWindowEnd);
        this.cityForm.controls['ProfileId'].setValue(data[0].profileId);
        this.cityForm.controls['SaveLocation'].setValue(data[0].saveLocation);

      }
        , (error: any) => {
        }
      );
    }
  }

  SaveUpdateFactCode()
  {
    
    let ReqData = {      
      
      "factCustomerNum": this.cityForm.get('FactCode')?.value,
      "customerName": this.cityForm.get('CustomerName')?.value,
      "active": this.cityForm.get('active')?.value,
      "EdiWindowBegin": this.cityForm.get('EdiWindowBegin')?.value,
      "EdiWindowEnd": this.cityForm.get('EdiWindowEnd')?.value,
      "ProfileId": this.cityForm.get('ProfileId')?.value,
      "SaveLocation": this.cityForm.get('SaveLocation')?.value,
      "clientCode": ''
    };
    this._Customerservice.AddEdiCustomer(ReqData).subscribe((res: any)=>{
      this.router.navigate(['/viewEdiCustomer']);
      let data = res.message;

      if (data == 'Saved Successfully') {
        if (this.Id >= 0) {
          alert('EDI Customer Updated Successfully');
          this.router.navigate(['/viewEdiCustomer']);
        }
        else if (this.cityForm.get('Id')?.value == 0) {
          alert('EDI Customer Added Successfully');
          this.router.navigate(['/viewEdiCustomer']);
        }
        else {

        }
      }
      else if(data == 'Duplicate Record Found')   
      {
        alert('Fact Customer already exist');
      } 
    }
      , (error: any) => {         
    }
      
    );
  }
  BackToFactCodeList()
  {
    this.router.navigate(['/viewEdiCustomer']);
  }
  ClearFormFields() {
    //this.cityForm.set('Name')?.value=''; 
    this.cityForm.controls['FactCode'].setValue('');
  }
}
