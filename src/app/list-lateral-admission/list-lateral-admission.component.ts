import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-lateral-admission',
  templateUrl: './list-lateral-admission.component.html',
  styleUrls: ['./list-lateral-admission.component.css']
})
export class ListLateralAdmissionComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.displayAllUgStu();
  }
  lateralList!:any;
  displayAllUgStu(){
    const url="https://kvcetadmission-api.herokuapp.com/lateral/list";
      this.http.get(url).subscribe((res)=>{
        this.lateralList = res;
      },err=>{
      }
      )
  }
}
