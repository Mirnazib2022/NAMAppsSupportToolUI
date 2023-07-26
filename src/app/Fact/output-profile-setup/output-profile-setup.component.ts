import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OutputProfileService } from 'src/app/services/output-profile.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-output-profile-setup',
  templateUrl: './output-profile-setup.component.html',
  styleUrls: ['./output-profile-setup.component.css']
})
export class OutputProfileSetupComponent implements OnInit {
  public cityForm: FormGroup;
  Id: number = 0;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _profileservice: OutputProfileService
  ) {
    this.route.queryParams.subscribe(params => {
      this.Id = params['Id'];
    });
    this.cityForm = this.fb.group(
      {
        Id: '0',
        Name: '',
        ProfileId: '',
        PropertyValue: ''
      }
    )
  }
  ngOnInit(): void {
    this.getApplicationVariable();
  }
  getApplicationVariable() {
    if (this.Id > 0) {

      this._profileservice.getProfileById(this.Id).pipe().subscribe((res: any) => {

        let data = res;
        this.cityForm.controls['Name'].setValue(data[0].name);
        this.cityForm.controls['ProfileId'].setValue(data[0].profileId);
        this.cityForm.controls['PropertyValue'].setValue(data[0].propertyValue);
      }
        , (error: any) => {
        }
      );
    }
  }
  ngAfterViewInit() {

  }

  SaveApplicationVariable() {

    let ReqData = {
      "Id": this.Id,
      "Name": this.cityForm.get('Name')?.value,
      "ProfileId": this.cityForm.get('ProfileId')?.value,
      "PropertyValue": this.cityForm.get('PropertyValue')?.value
    };
    this._profileservice.AddProfile(ReqData).pipe(first()).subscribe((res: any) => {
      let data = res.message;

      if (data == 'Saved Successfully') {
        if (this.Id >= 0) {
          alert('Profile setup Updated Successfully');
          this.router.navigate(['/viewApplicationVariable']);
        }
        else if (this.cityForm.get('Id')?.value == 0) {
          alert('Profile setup Added Successfully');
          this.router.navigate(['/viewApplicationVariable']);
        }
        else {

        }
      }
      else {
      }
    }
      , (error: any) => {
      }

    );
  }
  BackToFactApplicationVariable() {
    this.router.navigate(['/viewApplicationVariable']);
  }
  ClearFormFields() {
    //this.cityForm.set('Name')?.value=''; 
    this.cityForm.controls['Name'].setValue('');
  }
}
