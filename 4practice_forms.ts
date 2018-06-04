// app.module.ts

import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
@NgModule({ 
	imports: [
		BrowserModule,
		FormsModule, // <-- register FormsModule with our app.
	], 
}) 
export class AppModule { }

// ---  ======// ---  ====== // ---  ====== // ---  ====== // ---  ====== // ---  ====== 

// app.component.html

<form (submit)="onSubmit()">
    <!-- use the json pipe to see how newTask changes in real time -->
    <p> {{ newTask | json }} </p>
    <input type="text" name="newTask.title" [(ngModel)]="newTask.title" />
    <input type="text" name="newTask.description" [(ngModel)]="newTask.description" />
    <input type="submit" value="Create Task" />
</form>


// ---  ======// ---  ====== // ---  ====== // ---  ====== // ---  ====== // ---  ====== 

// app.components.ts

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  constructor() { } 
     
  ngOnInit() {
    this.newTask = { title: "", description: "" }
  }
     
  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
  }
}

// ---  ======// ---  ====== // ---  ====== // ---  ====== // ---  ====== // ---  ====== 

// http.service.ts
addTask(newtask) {
    return this._http.post('/task', newtask)
}