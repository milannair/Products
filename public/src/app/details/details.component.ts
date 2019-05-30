import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentId: any;
  currentProd: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentId = params.id;
    });
    this.getCurrentProd(this.currentId);
  }

  getCurrentProd(id){
    let observable = this._httpService.getOneProd(id);
    observable.subscribe(data => {
      this.currentProd = data;
    });
  }

  deleteProd(id){
    let observable = this._httpService.deleteOneProd(id);
    observable.subscribe(data => {
        console.log('deleted restaurant');
      });
    this._router.navigate(['products']);
  }



}
