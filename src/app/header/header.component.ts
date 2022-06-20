import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  value!:any;
  ngOnInit(): void {
    
    this.value=localStorage.getItem("token")
    this.value=JSON.parse(this.value)
    console.log("value: ",this.value);
    
  }

}
