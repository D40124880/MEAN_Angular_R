import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  serviceAddDog(dog) {
    return this._http.post('/new', dog);
  }

  serviceGetAllDogs() {
    return this._http.get('/all');
  }

  serviceDelete(id) {
    console.log(id);
    return this._http.delete('/delete/' + id);
  }

  serviceUpdate(id) {
    console.log(id);
  }

  serviceUpdateDog(dog) {
    return this._http.put('/update/' + dog._id, dog);
  }
}
