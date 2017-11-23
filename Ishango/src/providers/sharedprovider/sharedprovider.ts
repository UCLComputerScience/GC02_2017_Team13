import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/*
  Generated class for the QuantityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {
  public index;
  public speedVoice = 0;


  // buy_folder temporary variables
  public quantityTemp = [];
  public photosTemp = [];
  public moneypaidTemp = [];

  // buy_folder final stored values 
  public photos = [];
  public quantity = [];
  public moneypaid = [];

  // sell_folder temporary variables
  public quantityTempSell = [];
  public photosTempSell = [];
  public moneyreceivedTemp = [];

  // sell_folder final stored values 
  public quantitySell = [];
  public moneyReceived = [];


  
  public buysameitem: boolean = false;

  constructor(public http: Http, private device: Device, private tts: TextToSpeech) {
    console.log('Hello QuantityProvider Provider');

  }

  acceptaddition() {
    if (!this.buysameitem) {
      this.quantity.push(this.quantityTemp[this.quantityTemp.length - 1]);
      this.photos.push(this.photosTemp[this.photosTemp.length - 1]);
      this.moneypaid.push(this.moneypaidTemp[this.moneypaidTemp.length - 1]);
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

  //procedure for selling products
acceptaddition1() {

     this.quantitySell.push(this.quantityTempSell[this.quantityTempSell.length - 1]);
     this.moneyReceived.push(this.moneyreceivedTemp[this.moneyreceivedTemp.length - 1]);
     this.quantity[this.index] = this.quantity[this.index] - this.quantitySell[this.quantitySell.length - 1];

    var num: number = 0;
    for (num = 0; num < this.quantityTempSell.length; num++) {
      this.quantityTemp.splice(num, 1);
    }
    for (num = 0; num < this.moneypaidTemp.length; num++) {
      this.moneypaidTemp.splice(num, 1);
    }
    for (num = 0; num < this.photosTemp.length; num++) {
      this.photosTemp.splice(num, 1);
    }
  }
  //

  
  deleteitem(){
    this.quantity.splice(this.index,1);
    this.photos.splice(this.index,1);
    this.moneypaid.splice(this.index,1);
  }

//speed voice regulator for iOS devices
  speedvoice(){
     if(this.device.platform.toString() == "iOS")
          this.speedVoice = 1.5;
  }

//Text to Speech enabled 
  async producesound(soundString): Promise<any> {
    try {
         this.speedvoice();
         await this.tts.speak({ text: soundString,  rate: this.speedVoice})
    }
    catch (e) {
      console.log(e);
    }
  }
}
