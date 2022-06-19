import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ug-registration',
  templateUrl: './ug-registration.component.html',
  styleUrls: ['./ug-registration.component.css']
})
export class UgRegistrationComponent implements OnInit {
  dateOfEnquiry!:string;
  name!:string;
  programme!:string;
  contactNo!:number;
  emailId!:string;
  school!:string;
  mediumOfInstruction!:string;
  place!:string;
  mathsMark!:number;
  physicsMark!:number;
  chemistryMark!:number;
  totalHscScore!:number;
  cutOff!:number;
 group!:string;
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
      school!:new FormControl(''),
      mediumOfInstruction!:new FormControl(''),
      place!:new FormControl(''),
      mathsMark!:new FormControl(''),
      physicsMark!:new FormControl(''),
      chemistryMark!:new FormControl(''),
      totalHscScore!:new FormControl(''),
      cutOff!:new FormControl(''),
     group!:new FormControl(''),
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
  ugDetails(){
    this.step=this.step+1;
     const now = new Date();
    const userObj={
      "dateOfEnquiry":now.toLocaleString(),
      "name": this.name,
      "programme": this.programme,
      "contactNumber": this.contactNo,
      "emailId": this.emailId,
      "school":this.school,
      "mediumOfInstruction":this.mediumOfInstruction,
      "place":this.place,
      "mathsMark":this.mathsMark,
      "physicsMark":this.physicsMark,
      "chemistryMark":this.chemistryMark,
      "totalHscScore":this.totalHscScore,
      "cutOff":this.cutOff,
     "groupHsc":this.group,
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
    if(this.step == 5){
      const url="https://kvcetadmission-api.herokuapp.com/ug/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
     
      this.router.navigate(['/thankyou'])
    },(err)=>{
      console.log(err);
      // alert("unseccussfull");
      this.router.navigate(['/sorry'])
     
    })
    }
  }
  previous(){
    this.step=this.step-1;
  }
}
