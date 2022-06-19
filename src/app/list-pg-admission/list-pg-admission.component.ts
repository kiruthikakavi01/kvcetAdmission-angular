import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pg-admission',
  templateUrl: './list-pg-admission.component.html',
  styleUrls: ['./list-pg-admission.component.css']
})
export class ListPgAdmissionComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.displayAllPgStu();
  }
  pgList!:any;
displayAllPgStu(){
  const url="http://localhost:9009/pg/list";
    this.http.get(url).subscribe((res)=>{
      this.pgList = res;
    },err=>{
    }
    )
}
}
