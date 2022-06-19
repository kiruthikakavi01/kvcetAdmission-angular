import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ug-admission',
  templateUrl: './list-ug-admission.component.html',
  styleUrls: ['./list-ug-admission.component.css']
})
export class ListUgAdmissionComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.displayAllUgStu();
  }
  ugList!:any;
  displayAllUgStu(){
    const url="https://kvcetadmission-api.herokuapp.com/ug/list";
      this.http.get(url).subscribe((res)=>{
        this.ugList = res;
      },err=>{
      }
      )
  }
  
}
