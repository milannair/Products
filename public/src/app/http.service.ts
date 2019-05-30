import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProd(){
    return this._http.get('/allProd');
  }

  addProd(newRes){
    return this._http.post('/prod/create', newRes);
  }

  getOneProd(id){
    return this._http.get('/prod/' + id);
  }

  deleteOneProd(id){
    return this._http.delete('/prod/' + id)
  }

  updateProd(id, update){
    return this._http.patch('/prod/' + id, update);
  }
}
