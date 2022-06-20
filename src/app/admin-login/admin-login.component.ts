import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private http:HttpClient,public router: Router) { }
   email!:string;
  password!:string;
  form = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  adminlogin!:any;
  
  adminLogin(){
    const userObj={
      "email":this.email,
      "password":this.password,
    };
    const url="https://kvcetadmission-api.herokuapp.com/admin/login";
      this.http.post(url,userObj,{responseType:'json'}).subscribe((res:any)=>{
        console.log(res);
        
        this.adminlogin={"message":"admin"}
        localStorage.setItem("token", JSON.stringify(this.adminlogin))
        
        alert("admin Login Successful");
        this.router.navigate(['/list-ug-admission'])  
      },(err)=>{
        console.log(err);
        alert("Login failed");
      })
  }
}
