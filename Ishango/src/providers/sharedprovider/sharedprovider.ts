import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Storage } from '@ionic/storage';

@Injectable()
export class SharedProvider {
  public index;
  public speedVoice = 0;
  public photoProfile;

  // buy_folder temporary variables
  public quantityTemp = [];
  public photosTemp = [];
  public moneypaidTemp = [];

  // buy_folder final stored values 
  public photos = [];
  public quantity = [];
  public moneypaid = [];
  public isCashPaidBoolean;

  // sell_folder temporary variables
  public quantityTempSell = [];
  public photosTempSell = [];
  public moneyreceivedTemp = [];

  // sell_folder final stored values 
  public quantitySell = [];
  public moneyReceived = [];
  public photosSell = [];


  // debt values
  public debtRepay;
  public debt = [];

  //total profit
  public totalProfit = 0;

  // cash values
  public cash = 0;

  public buysameitem: boolean = false;

  constructor(public storage: Storage, public http: Http, private device: Device, private tts: TextToSpeech) {

    this.getValuesFromDB();

  }

  // used 'unshift' to add pictures and products on top on the page
  acceptaddition() {
    if (this.isCashPaidBoolean==true)
    {
      this.cash = this.cash - this.moneypaidTemp[this.moneypaidTemp.length - 1];
    }

    if (!this.buysameitem) {
      this.quantity.unshift(this.quantityTemp[this.quantityTemp.length - 1]);
      this.photos.unshift(this.photosTemp[this.photosTemp.length - 1]);
      this.moneypaid.unshift(this.moneypaidTemp[this.moneypaidTemp.length - 1]);
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
    this.updateDataBase();

  }

  //procedure for selling products
  acceptaddition1() {
    this.quantitySell.unshift(this.quantityTempSell[this.quantityTempSell.length - 1]);
    this.moneyReceived.unshift(this.moneyreceivedTemp[this.moneyreceivedTemp.length - 1]);
    this.photosSell.unshift(this.photosTempSell[this.photosTempSell.length - 1]);
    this.quantity[this.index] = this.quantity[this.index] - this.quantitySell[0];
    this.cash += this.moneyReceived[0];

    var num: number = 0;
    for (num = 0; num < this.quantityTempSell.length; num++) {
      this.quantityTemp.splice(num, 1);
    }
    for (num = 0; num < this.moneypaidTemp.length; num++) {
      this.moneypaidTemp.splice(num, 1);
    }
    this.updateDataBase();
  }
  
  //pay back for bought items
  repay() {
    this.debt[this.index] = this.debt[this.index] - this.debtRepay;
    this.updateDataBase();
  }

  //delete a product
  deleteitem() {
    this.quantity.splice(this.index, 1);
    this.photos.splice(this.index, 1);
    this.moneypaid.splice(this.index, 1);
    this.debt.splice(this.index,1);
    this.updateDataBase();
  }

    //delete a product
    deleteSell() {
      
        var match;
        //restoring the quantity in stock after deleting the sale
        for(var i = 0; i < this.photos.length; i++){
           for(var a = 0; a < this.photosSell.length; a++){
             if(this.photos[i] === this.photosSell[a] && this.quantitySell[a] == this.quantitySell[this.index]){
                this.quantity[i] += this.quantitySell[this.index];
                match = true;
             }
             if(match)
               break;
           }
           if(match)
              break;
        }

  // diminishing the cash after deleting the sale
        this.cash -= this.moneyReceived[this.index];

        this.quantitySell.splice(this.index,1);
        this.moneyReceived.splice(this.index,1);
        this.photosSell.splice(this.index,1);
        this.updateDataBase();
    }

  //speed voice regulator for iOS devices
  speedvoice() {
    if (this.device.platform.toString() == "iOS")
      this.speedVoice = 1.5;
  }


  //register the new debt
  registerdebt() {
    if (this.buysameitem) {
      this.debt[this.index] = this.debt[this.index] + this.moneypaidTemp[this.moneypaidTemp.length - 1];
    }
    else {
      this.debt.unshift(this.moneypaidTemp[this.moneypaidTemp.length - 1]);
    }
    this.updateDataBase();
  }

  updateDataBase(){
    this.storage.set('quantityArray', this.quantity);
    this.storage.set('photosArray', this.photos);
    this.storage.set('moneypaidArray', this.moneypaid);

    this.storage.set('quantitySell', this.quantitySell);
    this.storage.set('moneyReceived', this.moneyReceived);
    this.storage.set('photosSell', this.photosSell);

    this.storage.set('debt',this.debt);
    this.storage.set('cash', this.cash);


  }



  //Text to Speech enabled 
  async producesound(soundString): Promise<any> {
    try {
      this.speedvoice();
      await this.tts.speak({ text: soundString, rate: this.speedVoice })
    }
    catch (e) {
      console.log(e);
    }
  }

  getValuesFromDB(){
    this.storage.get('quantityArray').then((data) => {
      if(data!=null)
      {
        this.quantity = data;
      }
    });
    this.storage.get('photosArray').then((data) => {
      if(data!=null)
      {
        this.photos = data;
      }
    });
    this.storage.get('moneypaidArray').then((data) => {
      if(data!=null)
      {
        this.moneypaid = data;
      }
    });
    this.storage.get('quantitySell').then((data) => {
      if(data!=null)
      {
        this.quantitySell = data;
      }
    });
    this.storage.get('moneyReceived').then((data) => {
      if(data!=null)
      {
        this.moneyReceived = data;
      }
    });
    this.storage.get('photosSell').then((data) => {
      if(data!=null)
      {
        this.photosSell = data;
      }
    });

    this.storage.get('debt').then((data) => {
      if(data!=null)
      {
        this.debt = data;
      }
    });
    this.storage.get('cash').then((data) => {
      if(data!=null)
      {
        this.cash = data;
      }
    });
  }



}
