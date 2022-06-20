import { Injectable } from '@angular/core';
import {  CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authService:AuthserviceService,
    private router:Router){}
canActivate(): boolean{
if(this.authService.loggedIn()){
return true
}else{
this.router.navigate(["/login"])
return false
}
}
  
}
