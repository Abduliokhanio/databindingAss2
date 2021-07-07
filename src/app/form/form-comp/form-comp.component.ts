import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {

  oneWay = ""
  twoWay = ""

  constructor() { }

  ngOnInit(): void {
  }

  update1Way(event: any){
    this.oneWay = event.srcElement.value
  }

  onClick1(){
    this.oneWay = ""
  }

  onClick2(){
    this.twoWay = ""
  }

}
