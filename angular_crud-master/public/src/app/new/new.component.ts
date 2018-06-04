import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  dog:any;
  errors:any;
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService) { 
    this.dog = { name:'', breed: '', age:0};
  }

  ngOnInit() {
    this.errors = [];
  }

  addDog(){
    this._httpService.serviceAddDog(this.dog)
      .subscribe( data=>{
        if(data['errors']){
          this.errors = data['errors'];
        }else{
          this._router.navigate(['/dogs', data['_id']]);
        }
        console.log(data);
      })
  }


}
