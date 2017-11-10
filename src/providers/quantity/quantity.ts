import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the QuantityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuantityProvider {
  public quantity=[];
  public photos=[];
  public moneypaid=[];

  constructor(public http: Http) {
    console.log('Hello QuantityProvider Provider');
  }





}
