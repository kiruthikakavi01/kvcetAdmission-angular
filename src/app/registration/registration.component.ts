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
  exform!: FormGroup;

  name!:string;
emailId!:string;
contactNo!:number;
course!:string;


  constructor(private http:HttpClient,public router: Router) { }

  ngOnInit(): void {
    this.exform=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'phone':new FormControl(
        null,[
          Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'course':new FormControl(null,[Validators.required])
    });


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
  const url="http://localhost:9009/reg/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      
      this.router.navigate(['/mailsend'])
      
     
    },(err)=>{
      console.log(err);
      alert("Unsuccessfully Registered");
    })
}
}

