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

  public quantityTemp = [];
  public photosTemp = [];
  public moneypaidTemp = [];

  public quantity = [];
  public photos = [];
  public moneypaid = [];

  constructor(public http: Http) {
    console.log('Hello QuantityProvider Provider');
  }

  acceptaddition() {

    this.quantity.push(this.quantityTemp[this.quantityTemp.length-1]);
    this.photos.push(this.photosTemp[this.photosTemp.length-1]);
    this.moneypaid.push(this.photosTemp[this.moneypaidTemp.length-1]);
    
    var num: number = 0;
    for (num = 0; num < this.quantityTemp.length; num++) {
      this.quantityTemp.splice(num, 1);
    }
    for (num = 0; num < this.moneypaidTemp.length; num++) {
      this.moneypaidTemp.splice(num, 1);
    }
    for (num = 0; num < this.photosTemp.length; num++) {
      this.photosTemp.splice(num, 1);
    } 


  }





}
