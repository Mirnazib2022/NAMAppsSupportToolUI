export class Users {
    Id: number | undefined;
    UserName?: string;
    password?: string;
    FirstName?: string;
    LastName?: string;
    IsAdmin:boolean=false;
    Email?: string;
    PhoneNumber?: string;
    IsActive:boolean=false;
    IsLocked:boolean=false;
    CreatedBy:number | undefined;
    CreatedOn?:Date 
    ModifiedBy:number | undefined;
    ModifiedOn?:Date 
}
