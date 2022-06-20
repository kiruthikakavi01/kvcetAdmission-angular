import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'Administration';
  value!:any;
  ngOnInit(): void {
    this.value=localStorage.getItem("token")
    this.value=JSON.parse(this.value)
    console.log("value: ",this.value);
  }

}
