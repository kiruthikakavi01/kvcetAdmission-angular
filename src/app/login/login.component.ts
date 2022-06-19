import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName!:string;
password!:string;
  constructor(private http:HttpClient,public router: Router) { }

  ngOnInit(): void {
  }
  login(){
    const userObj={
      "userName":this.userName,
      "password":this.password
    };
    let message!:string;
    const url="http://localhost:9009/reg/login";
      this.http.post(url,userObj,{responseType:'json'}).subscribe((res:any)=>{
        console.log(res);
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
