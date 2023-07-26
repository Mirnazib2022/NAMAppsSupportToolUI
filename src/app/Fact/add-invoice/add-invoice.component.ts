import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InvoiceServiceService } from 'src/app/services/invoice-service.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  public InvoiceForm: FormGroup;
  Id: number = 0;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _invoiceService: InvoiceServiceService
  ) {

    this.route.queryParams.subscribe(params => {
      this.Id = params['Id'];
    });

    this.InvoiceForm = this.fb.group(
      {
        Id: '0',
        FactCode: '',
        active: false,
        InvoiceNum: ''
      }
    )
  }
  ngOnInit(): void {
    this.getInvoice();
  }

  ngAfterViewInit() {

  }
  getInvoice() {
    if (this.Id > 0) {

      this._invoiceService.getInvoiceById(this.Id).pipe().subscribe((res: any) => {

        let data = res;
        this.InvoiceForm.controls['FactCode'].setValue(data[0].customerNum); 
        this.InvoiceForm.controls['InvoiceNum'].setValue(data[0].invoiceNum);        
        this.InvoiceForm.controls['active'].setValue(data[0].retrigger); 

      }
        , (error: any) => {
        }
      );
    }
  }
  SaveUpdateInvoice() {

    let ReqData = {
      "Id": this.Id,
      "invoiceNum": this.InvoiceForm.get('InvoiceNum')?.value,
      "customerNum": this.InvoiceForm.get('FactCode')?.value,
      "retrigger":this.InvoiceForm.get('active')?.value
    };
    this._invoiceService.AddEdiInvoice(ReqData).subscribe((res: any) => {
      
      let data = res.message;

      if (data == 'Saved Successfully') {
        if (this.Id >= 0) {
          alert('Fact customer configured Successfully');
          this.router.navigate(['/SearchInvoice']);
        }
        else if (this.InvoiceForm.get('Id')?.value == 0) {
          alert('Fact customer configured Successfully');
          this.router.navigate(['/SearchInvoice']);
        }
        else {

        }
      }
    }
      , (error: any) => {
      }

    );
  }
  BackToInvoiceList() {
    this.router.navigate(['/SearchInvoice']);
  }
  ClearFormFields() {
    this.InvoiceForm.controls['InvoiceNum'].setValue('');
    this.InvoiceForm.controls['FactCode'].setValue('');
  }
}
