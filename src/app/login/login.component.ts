import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName!:string;
password!:string;

form = new FormGroup({
  userName:new FormControl('', Validators.required),
  
  password:new FormControl('',Validators.required)
})
  constructor(private http:HttpClient,public router: Router) { }

  ngOnInit(): void {
  }
  userLogin!:any;
  login(){
    const userObj={
      "userName":this.userName,
      "password":this.password,
    };
    
    let message!:string;
    const url="https://kvcetadmission-api.herokuapp.com/reg/login";
      this.http.post(url,userObj,{responseType:'json'}).subscribe((res:any)=>{
        console.log(res);
        this.userLogin=res
        //this.userLogin="admin"
        localStorage.setItem("token", JSON.stringify(this.userLogin))
        if(res.message==null){
        alert("Login failed");
        }else if(res.message=='UG'){
          alert("Login Successful");
          this.router.navigate(['/ug-registration'])

        }else if(res.message=='PG'){
          alert("Login Successful");
          this.router.navigate(['/pg-registration'])
        }else if(res.message=='Lateral'){
          alert("Login Successful");
          this.router.navigate(['/lateral-entry-registration'])
        }
      },(err)=>{
        console.log(err);
        alert("Login failed");
      })
  }
}
