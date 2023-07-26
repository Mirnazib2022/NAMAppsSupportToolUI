import {AfterViewInit, Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EdiCustomerService } from 'src/app/services/edi-customer.service';

@Component({
  selector: 'app-oracle-customer',
  templateUrl: './oracle-customer.component.html',
  styleUrls: ['./oracle-customer.component.css']
})
export class OracleCustomerComponent implements OnInit {
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
    active:false
  }
)
    }
  ngOnInit(): void {
    this.getFactCustomer();
  }
  
  ngAfterViewInit() {
    
  }
  getFactCustomer() {
    if (this.Id > 0) {

      this._Customerservice.GetFactEdiCustomerById(this.Id).pipe().subscribe((res: any) => {

        let data = res;
        this.cityForm.controls['FactCode'].setValue(data[0].factCustomerNum);
        this.cityForm.controls['active'].setValue(data[0].isActive);        

      }
        , (error: any) => {
        }
      );
    }
  }
  SaveUpdateFactCode()
  {
    
    let ReqData = {      
      "Id": this.Id,
      "factCustomerNum": this.cityForm.get('FactCode')?.value,
      "IsActive": this.cityForm.get('active')?.value,
    };
    this._Customerservice.AddFactEdiCustomer(ReqData).subscribe((res: any)=>{
      
      let data = res.message;

      if (data == 'Saved Successfully') {
        if (this.Id >= 0) {
          alert('Oracle Customer Updated Successfully');
          this.router.navigate(['/viewOracleCustomer']);
        }
        else if (this.cityForm.get('Id')?.value == 0) {
          alert('Oracle Customer Added Successfully');
          this.router.navigate(['/viewOracleCustomer']);
        }
        else {

        }
      }
      else if(data == 'Duplicate Record Found')   
      {
        alert('Oracle Customer already exist');
      }  
    }
      , (error: any) => {         
    }
      
    );
  }
  BackToFactCodeList()
  {
    this.router.navigate(['/viewOracleCustomer']);
  }
  ClearFormFields() {
    //this.cityForm.set('Name')?.value=''; 
    this.cityForm.controls['Name'].setValue('');
  }
}
