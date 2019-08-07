import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {
public title: string="abc";

public isShowed: boolean = true;
public username: string = "THRONE";
public isChecked: boolean =false;
public age: number;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    // if(this.isShowed) {
    //   this.isShowed = false;
    // } else {
    //   this.isShowed = true;
    // }
    this.isShowed = !this.isShowed;
  }

  onChange(value) {
this.isChecked = value;
  }


}
