import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private currentUserSubject: BehaviorSubject<any>;
  public loggedInUser: Observable<Users>;
  
  constructor(private http: HttpClient,private router: Router) {

      this.currentUserSubject=new BehaviorSubject(JSON.parse(localStorage.getItem('loggedInUser') || 'null'));
      this.loggedInUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    
    var user:any =null;
    if(username.toLowerCase()=="admin" && password.toLowerCase()=="admin")
    {
      user ={id: 1,UserName: 'Admin User',FirstName: 'Admin',LastName: 'User',isValid:true,IsAdmin:true};
    } 
    else if(username.toLowerCase()=="support" && password.toLowerCase()=="1234")
    {
      user ={id: 1,UserName: 'Support User',FirstName: 'Support',LastName: 'User',isValid:true,IsAdmin:false};
    }
    return of(new HttpResponse({ status: 200, body:user }))
      .pipe(map(userData => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        if(userData.body)
          localStorage.setItem('loggedInUser', JSON.stringify(userData.body));
        this.currentUserSubject.next(userData.body);
        return userData.body;
    }));
  }
  logout() {
    localStorage.removeItem('loggedInUser');
    this.currentUserSubject.next(null);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.currentUserValue;
    if (currentUser) {
        // logged in so return true
        return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
