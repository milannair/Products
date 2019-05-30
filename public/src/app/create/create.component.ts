import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProd : any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newProd= {_id: Math.floor(Math.random() * 10000000000000000000) ,name :"", quantity :"", price: ""}
  }

  onSubmit(){
    let observable = this._httpService.addProd(this.newProd);
    observable.subscribe(data => {
      console.log("got prod")
      this.newProd = data;
    });
    this.newProd = {name :"", quantity :"", price:""};
    this._router.navigate(['/products']);
  }


}
