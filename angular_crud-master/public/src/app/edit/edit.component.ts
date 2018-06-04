import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dog:any;
  dog_id:string;
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.dog_id = params['id'];
      console.log(this.dog_id)
      this.getSingleDog(this.dog_id);
    });
  }

  getSingleDog(id) {
    this._httpService.serviceGetSingleDog(id)
      .subscribe(data => {
        console.log(data);
        this.dog = data;
      })
  }

  updateDog(){
    this._httpService.serviceUpdateDog(this.dog)
      .subscribe(data=>{
        this._router.navigate(['/dogs', this.dog_id]);
      })
  }

}
