import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentId: any;
  editProd: any;
  saveProd: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentId = params.id;
    });
    this.editProd = {name :"", quantity :"", price:""}
    this.saveProd = {name :"", quantity :"", price:""}
    this.getCurrentProd(this.currentId);
  }

  getCurrentProd(id){
    let observable = this._httpService.getOneProd(id);
    observable.subscribe(data => {
      this.editProd = data;
      this.saveProd = this.editProd;
    });
  }

  onSubmit(){
    let observable = this._httpService.updateProd(this.currentId, this.editProd);
    observable.subscribe(data => {
      this.editProd = data;
    });
    this.editProd = {name :"", quantity :"", price:""}
    this._router.navigate(['products']);
  }

  reset(id){
    this._router.navigate(['products', id, 'edit']);
  }
}
