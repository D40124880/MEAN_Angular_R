import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  dog:any;
  dog_id:string;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute, 
    private _httpService:HttpService) { 

  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.dog_id = params['id'];
      console.log(this.dog_id)
      this.getSingleDog(this.dog_id);
    });
  }

  getSingleDog(id){
    this._httpService.serviceGetSingleDog(id)
      .subscribe(data=>{
        console.log(data);
        this.dog = data;
      })
  }

  deleteDog(id){
    this._httpService.serviceDeleteDog(id)
      .subscribe(data=>{
        this._router.navigate(['/']);
      })
  }

}
