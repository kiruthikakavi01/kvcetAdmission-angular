import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  name!:string;
emailId!:string;
contactNo!:number;
course!:string;

form = new FormGroup({
   name:new FormControl('', Validators.required),
   email:new FormControl('',[Validators.required,Validators.email]),
   contactNo:new FormControl('',[Validators.required,Validators.pattern("(\\+91-?)|0?[0-9]{10}")]),
   course:new FormControl('',Validators.required)
})
  constructor(private http:HttpClient,public router: Router) { }

  ngOnInit(): void {
    


  }
register(){
  const userObj={
    "studentName": this.name,
    "contactNumber": this.contactNo,
    "emailId": this.emailId,
    "course": this.course,
    "userName": "kvcetcse01",
    "password": "asdfew233ww"
  };
  const url="https://kvcetadmission-api.herokuapp.com/reg/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      
      this.router.navigate(['/mailsend'])
      
     
    },(err)=>{
      console.log(err);
      alert("Unsuccessfully Registered");
    })
}
}

