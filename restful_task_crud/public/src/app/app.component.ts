import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dog: any;
  allDogs: any;
  dogEdit: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.dog = {name: '', age: 0, breed: ''};
    this.allDogs = [];
    this.getAllDogs();
    this.dogEdit = false;
  // any other code
  }

  addDog() {
    console.log(this.dog);
    this._httpService.serviceAddDog(this.dog)
    .subscribe(data => {
      console.log(data);
      this.getAllDogs();
    });
  }

  getAllDogs() {
    this._httpService.serviceGetAllDogs()
    .subscribe(data => {
      this.allDogs = data;
      console.log(data);
    });
  }

  deleteDog(id) {
    this._httpService.serviceDelete(id)
    .subscribe(data => {
      this.getAllDogs();
      this.dogEdit = false;
    });
  }

  showUpdate(dog) {
    console.log(dog);
    this.dogEdit = dog;
  }

  updateDog() {
    console.log(this.dogEdit);
    this._httpService.serviceUpdateDog(this.dogEdit)
    .subscribe(data => {
      this.getAllDogs();
      this.dogEdit = false;
    });
  }
}
