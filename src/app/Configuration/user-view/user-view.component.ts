import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Subject, takeUntil } from 'rxjs';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { UserService } from 'src/app/services/user.service';
import { UserAddModalComponent } from 'src/app/user-add-modal/user-add-modal.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  //modalRef: MdbModalRef<UserAddModalComponent> | null = null;
  userList:any[]=[];
  destroy$: Subject<boolean>=new Subject<boolean>();

  constructor(private router: Router,private userService:UserService, private authService:AuthenticateService
    //,private modalService: MdbModalService
    )
  {
        if (!this.authService.currentUserValue.IsAdmin) { 
          this.router.navigate(['/error']);
  }  
  }
  showUser() {
    
    this.userService.getUsers().pipe(takeUntil(this.destroy$)).subscribe
    (
      (data:any) =>{this.userList=data;},
      (error: any) => {console.log("Error : "+error.message);} 
    );
  }
  openModal() {
    // this.modalRef = this.modalService.open(UserAddModalComponent, {
    //   modalClass: 'modal-xl'
    // })
  }
  ngOnDestroy()
  {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
