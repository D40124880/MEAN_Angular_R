import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dog: any;

  constructor() {
    this.dog = {
      name: '',
      age: 0,
      breed: ''
    };
  }

  addDog() {
    console.log(this.dog);
  }
}
