import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SentinelService } from "src/app/services/sentinel.service";

@Component({
  selector: 'app-addeditapplicationmodal',
  templateUrl: './addeditapplicationmodal.component.html',
  styleUrls: ['./addeditapplicationmodal.component.css']
})
export class AddeditapplicationmodalComponent implements OnInit{

  public appForm:FormGroup; 
  toppingList: any[] = [];
  public dropdownSettings = {
    singleSelection: false,
    idField: 'value',
    textField: 'label',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3
};
  constructor(private fb: FormBuilder,private sentinelService:SentinelService)
  {
    this.appForm = this.fb.group({
      appName: '',
      seq:'',
      active:false,
      config:'10'
    });
  }
  ngOnInit() {
    this.toppingList = [{ value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
    { value: '6', label: 'Six' },
    { value: '7', label: 'Seven' },
    { value: '8', label: 'Eight' }];
  }

  saveData()
  {
    var application={
      "id": 0,
      "appName": this.appForm.get('appName')?.value,
      "isActive": this.appForm.get('active')?.value,
      "sequence": this.appForm.get('seq')?.value,
      "ConfigId":this.appForm.get('config')?.value,
    }

    this.sentinelService.postApplication(application).subscribe((response: any) => {
      console.log(response);
    });
    //console.log(application);    
  }

}
