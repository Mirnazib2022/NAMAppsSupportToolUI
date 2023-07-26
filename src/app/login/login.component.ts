import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { first } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName='';
  password='';
  constructor(private router: Router,private authService: AuthenticateService) 
  { 
        if (this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }        
  }
  // constructor(private router: Router){            
  // }
  ngOnInit(){}
  public loginClick()
  {
    this.authService.login(this.userName, this.password)
    .pipe(first())
            .subscribe(
               data  => {          
                  if((data))
                  {
                    debugger;
                    this.router.navigate(['/']);
                  }
                },
              (error: any) => {
                });
  }
}
