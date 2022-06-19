import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lateral-entry-registration',
  templateUrl: './lateral-entry-registration.component.html',
  styleUrls: ['./lateral-entry-registration.component.css']
})
export class LateralEntryRegistrationComponent implements OnInit {
  dateOfEnquiry!:string;
  name!:string;
  programme!:string;
  contactNo!:number;
  emailId!:string;
  polytechnicName!:string;
  place!:string;
  percentage!:number;
  diplomaDepartment!:string;
  community!:string;
  date!:Date;
  scholarship!:string;
  fatherName!:string;
  fatherOccupation!:string;
  motherName!:string;
  motherOccupation!:string;
  parentContactNo!:number;
  alternativeContactNo!:number;
  address!:string;
  knowKvcet!:string;
  referenceName!:string;
  ifCandidate!:string;
  amountPaid!:string;
  originalCertificateList!:string;
  step:any =1;
  multistep = new FormGroup({
    userDetails:new FormGroup({
      name:new FormControl(''),
      programme:new FormControl(''),
      contactNo:new FormControl(''),
      emailId:new FormControl('')
    }),
    ugDetails:new FormGroup({
        polytechnicName:new FormControl(''),
      place:new FormControl(''),
      percentage:new FormControl(''),
      diplomaDepartment:new FormControl(''),
    }),
    personalDetails:new FormGroup({
      community:new FormControl(''),
      date:new FormControl(''),
      scholarship:new FormControl(''),
      fatherName:new FormControl(''),
      fatherOccupation:new FormControl(''),
      motherName:new FormControl(''),
      motherOccupation:new FormControl(''),
      parentContactNo:new FormControl(''),
      alternativeContactNo:new FormControl(''),
      address:new FormControl('')
    }),
    otherDetails:new FormGroup({
      knowKvcet:new FormControl(''),
      referenceName:new FormControl(''),
      ifCandidate:new FormControl(''),
      amountPaid:new FormControl('null'),
      originalCertificateList:new FormControl('')
  })
  })
  constructor(private http:HttpClient,public router: Router) { }

  ngOnInit(): void {
  }
  lateralDetails(){
    this.step=this.step+1;
     const now = new Date();
    const userObj={
      "dateOfEnquiry":now.toLocaleString(),
      "name": this.name,
      "programme": this.programme,
      "contactNumber": this.contactNo,
      "emailId": this.emailId,
      "polytechnicName": this.polytechnicName,
      "place": this.place,
      "percentage": this.percentage,
      "diplomaDepartment": this.diplomaDepartment,
      "community": this.community,
      "dateOfBirth": this.date,
      "scholarshipApplicable": this.scholarship,
      "fatherName": this.fatherName,
      "fatherOccupation": this.fatherOccupation,
      "motherName": this.motherName,
      "motherOccupation": this.motherOccupation,
      "parentContactNumber": this.parentContactNo,
      "alternativeNumber": this.alternativeContactNo,
      "address": this.address,
      "howToKnowkvcet": this.knowKvcet,
      "nameOfTheReference": this.referenceName,
      "ifCandidate": this.ifCandidate,
      "amountPaid": this.amountPaid,
      "originalCertificateList": this.originalCertificateList
    };
    console.log(userObj);
    if(this.step > 4){
      const url="http://localhost:9009/lateralEntry/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      // alert("successfully Registered");
      this.router.navigate(['/thankyou'])
    },(err)=>{
      console.log(err);
      alert("Unsuccessfully Registered");
    })
    }
  }
  previous(){
    this.step=this.step-1;
  }
}
