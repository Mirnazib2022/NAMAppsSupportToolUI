import { Component, OnInit } from '@angular/core';
import { Users } from './models/users';
import { AuthenticateService } from './services/authenticate.service';
import { Router } from '@angular/router';
import { Constants } from './constants';
import { AppMenuService } from './services/app-menu.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = Constants.TITLE;
  destroy$: Subject<boolean>=new Subject<boolean>();
  isAdmin? :boolean=false;
  public menuList: any = [];

  constructor(private router: Router,public authService: AuthenticateService,private menuService:AppMenuService) 
  {
      this.authService.loggedInUser?.subscribe(x => this.isAdmin = x?.IsAdmin);
      
  }
  ngOnInit(){


    this.menuService.getAppMenu().pipe(takeUntil(this.destroy$)).subscribe
    (
      (data:any) =>{this.menuList=data;},
      (error: any) => {console.log("Error : "+error.message);} 
    );

    /*this.menuList = [
      {id: 1, menuText:"Duty Deduction",child:[{menuText:"config 1",href:"DDConfig1"},{menuText:"config 2",href:"#"},{menuText:"config 3",href:"#"}]},
      {id: 2, menuText:"First Sale",child:[{menuText:"config 1",href:"#"}]},
      {id: 3, menuText:"LIFT",child:[{menuText:"config 1",href:"#"},{menuText:"config 2",href:"#"}]}
    ];*/
  }
  logout() 
  {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
  homeNavigate()
  {
      this.router.navigate(['/']);
  }
  ngOnDestroy()
  {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
