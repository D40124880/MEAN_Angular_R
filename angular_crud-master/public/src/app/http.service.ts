import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }


  serviceGetAllDogs(){
    return this._http.get('/api/dogs');
  }

  serviceGetSingleDog(id){
    return this._http.get('/api/dogs/'+id);
  }

  serviceDeleteDog(id){
    return this._http.delete('/api/dogs/' + id);
  }

  serviceUpdateDog(dog){
    return this._http.put('/api/dogs/'+dog._id, dog);
  }

  serviceAddDog(dog){
    return this._http.post('/api/dogs', dog);
  }
}
