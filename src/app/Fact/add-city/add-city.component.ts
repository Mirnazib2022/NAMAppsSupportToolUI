import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  public cityForm: FormGroup;
  Id: number = 0;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _Cityservice: CityService
  ) {
    this.route.queryParams.subscribe(params => {
      this.Id = params['Id'];
    });
    this.cityForm = this.fb.group(
      {
        Id: '0',
        Name: ''
      }
    )
  }
  ngOnInit(): void {
    //alert(this.cityForm.get('Id')?.value);
    //throw new Error('Method not implemented.');
    this.getCity();
  }

  ngAfterViewInit() {

  }
  getCity() {
    if (this.Id > 0) {

      this._Cityservice.getCityById(this.Id).pipe(first()).subscribe((res: any) => {

        let data = res;
        this.cityForm.controls['Name'].setValue(data[0].name);
        //this.Code = data[0].Code;

      }
        , (error: any) => {
        }
      );
    }
  }

  SaveUpdateCity() {

    let ReqData = {
      "Id": this.Id,
      "Name": this.cityForm.get('Name')?.value

    };

    this._Cityservice.AddCity(ReqData).pipe(first()).subscribe((res: any) => {

      let data = res.message;

      if (data == 'Saved Successfully') {
        if (this.Id >= 0) {
          alert('City Updated Successfully');
          this.router.navigate(['/viewcity']);
        }
        else if (this.cityForm.get('Id')?.value == 0) {
          alert('City Added Successfully');
          this.router.navigate(['/viewcity']);
        }
        else {

        }
      }
      else if(data == 'Duplicate Record Found')   
      {
        alert('City already exist');
      }  
    }
      , (error: any) => {
      }

    );
  }
  BackToCityList() {
    this.router.navigate(['/viewcity']);
  }
  ClearFormFields() {
    //this.cityForm.set('Name')?.value=''; 
    this.cityForm.controls['Name'].setValue('');
  }
}
