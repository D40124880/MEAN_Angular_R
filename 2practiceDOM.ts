// app.components.ts

import { Component, OnInit } from '@angular/core';
     
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
     
export class AppComponent implements OnInit {
  num: number;
  randNum: number;
  str: string;
  first_name: string;
     
  ngOnInit() {
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'Hello Angular Developer!';
    this.first_name = 'Alpha';
  }
}   

// THIS TWO TYPES OF CODE GO TOGETHER!!!

<h3>Value of num is: {{num}}</h3>
<h3>Value of randNum is: {{randNum}}</h3>
<h3>{{str}}</h3>
<input type="text" [value]="first_name" />

// <img [src]="varNameHere" />
<img [src]="varNameHere" />

// ------//////------//////------/-/////------//-//-/-/--/--/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// app.components.ts

export class AppComponent implements OnInit {
    snacks: string[];
    loggedIn: boolean;

    ngOnInit(){
        this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
        this.loggedIn = true;
    }
}

// ------//////------//////------/-/////------//-//-/-/--/--/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// app.component.html
<p *ngIf="loggedIn">You are logged in!</p>
<p *ngFor="let snack of snacks">{{snack}}</p>
<p *ngIf="snacks.length < 3">You need more snacks.</p>
