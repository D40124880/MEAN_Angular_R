import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allDogs:any;
  constructor(private _httpService: HttpService) {
    this.allDogs = [];
   }

  ngOnInit() {
    this.getAllDogs();
  }

  getAllDogs(){
    this._httpService.serviceGetAllDogs()
      .subscribe(data=>{
        console.log(data);
        this.allDogs = data;
      })
  }

}
