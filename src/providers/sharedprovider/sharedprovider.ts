import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the QuantityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {
  public index;


  // buy_folder temporary variables
  public quantityTemp = [];
  public photosTemp = [];
  public moneypaidTemp = [];

  // sell_folder temporary variables
  public quantityTempSell = [];
  public photosTempSell = [];
  public moneyreceivedTemp = [];

  // final stored values
  public photos = [];
  public quantity = [];
  public moneypaid = [];
  public moneyreceived = [];


  speed = 1;
        

  
  public buysameitem: boolean = false;

  constructor(public http: Http, private device: Device) {
    console.log('Hello QuantityProvider Provider');

  }

  speedvoice(){
            if(this.device.platform == 'iOS')
                if(this.device.version.charAt(0) > '9')
                    this.speed = 1.5;

           }

            



  acceptaddition() {
    if (this.buysameitem == false) {
      this.quantity.push(this.quantityTemp[this.quantityTemp.length - 1]);
      this.photos.push(this.photosTemp[this.photosTemp.length - 1]);
      this.moneypaid.push(this.photosTemp[this.moneypaidTemp.length - 1]);
    }
    else {
      this.quantity[this.index] = this.quantity[this.index] + this.quantityTemp[this.quantityTemp.length - 1];
      this.moneypaid[this.index] = this.moneypaid[this.index] + this.moneypaidTemp[this.moneypaidTemp.length - 1];
      this.buysameitem = false;
    }
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
  
  deleteitem(){
    this.quantity.splice(this.index,1);
    this.photos.splice(this.index,1);
    this.moneypaid.splice(this.index,1);
  }





}
