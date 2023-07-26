import { Component } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,private authService: AuthenticateService) 
  { 
        if (this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }        
  }
}
