import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IscashpaidPage } from '../../pages/iscashpaid/iscashpaid';
/*
  Generated class for the QuantityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuantityProvider {
  public moneypaid = 10;

  constructor(public http: Http) {
    console.log('Hello QuantityProvider Provider');
  }
  increment(amount) {
    this.moneypaid= this.moneypaid + amount;
  }

  reduce(amount) {
    this.moneypaid = this.moneypaid - amount;
  }




}
