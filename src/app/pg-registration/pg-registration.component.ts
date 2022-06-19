import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-registration',
  templateUrl: './pg-registration.component.html',
  styleUrls: ['./pg-registration.component.css']
})
export class PgRegistrationComponent implements OnInit {
dateOfEnquiry!:string;
name!:string;
programme!:string;
contactNo!:number;
emailId!:string;
ugCollegeName!:string;
ugDepartment!:string;
place!:string;
percentage!:number;
completionYear!:number;
community!:string;
dateOfBirth!:Date;
scholarship!:string;
fathername!:string;
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
    ugCollegeName:new FormControl(''),
    ugDepartment:new FormControl(''),
    place:new FormControl(''),
    percentage:new FormControl(''),
    completionYear:new FormControl('')

  }),
  personalDetails:new FormGroup({
    community:new FormControl(''),
    dateOfBirth:new FormControl(''),
    scholarship:new FormControl(''),
    fathername:new FormControl(''),
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
    amountPaid:new FormControl(''),
    originalCertificateList:new FormControl('')
})
})
  constructor(private http:HttpClient,public router: Router) { }

  ngOnInit(): void {
  }
  pgDetails(){
    this.step=this.step+1;
    const now = new Date();
    const userObj={
      "dateOfEnquiry":now.toLocaleString(),
      "name": this.name,
      "department": this.programme,
      "contactNumber": this.contactNo,
      "emailId": this.emailId,
      "ugCollege": this.ugCollegeName,
      "ugDepartment": this.ugDepartment,
      "place": this.place,
      "percentage": this.percentage,
      "yearOfCompletion": this.completionYear,
      "community": this.community,
      "dateOfBirth": this.dateOfBirth,
      "scholarshipApplicable": this.scholarship,
      "fatherName": this.fathername,
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
    
    if(this.step == 5){

      
      const url="https://kvcetadmission-api.herokuapp.com/pg/save";
      console.log(userObj);
    this.http.post(url,userObj).subscribe((res:any)=>{
      console.log(res);
      // alert("successfully Registered");
      this.router.navigate(['/thankyou'])
     
    },(err)=>{
      console.log(err);
      this.router.navigate(['/sorry'])
      //alert("Unsuccessfully Registered");
      
    })
    }
  }
  previous(){
    this.step=this.step-1;
  }
}
