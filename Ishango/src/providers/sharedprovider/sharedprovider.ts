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
  public totalmoneypaid = [];
  public isCashPaidBoolean;

  // sell_folder temporary variables
  public quantityTempSell = [];
  public photosTempSell = [];
  public moneyreceivedTemp = [];

  //average buying price
  public averagebuyingprice = [];
  public weightedquantity = [];
  public partialoldaverage;
  public partialnewaverage;

  // sell_folder final stored values 
  public quantitySell = [];
  public moneyReceived = [];
  public photosSell = [];
  public isCashReceivedBoolean;

  // debt values
  public debtRepay;
  public debtYes;
  public debt = [];
  public photosDebtTemp = [];
  public photosDebt = [];

  //credit values
  public creditRepay;
  public creditYes;
  public credit = [];

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
    if (this.isCashPaidBoolean == true) {
      this.cash = this.cash - this.moneypaidTemp[this.moneypaidTemp.length - 1];
      if (this.cash < 0)
        this.cash = 0;
    }

    if (!this.buysameitem) {
      this.quantity.unshift(this.quantityTemp[this.quantityTemp.length - 1]);
      this.photos.unshift(this.photosTemp[this.photosTemp.length - 1]);
      this.moneypaid.unshift(this.moneypaidTemp[this.moneypaidTemp.length - 1]);

      var round = Math.ceil(this.moneypaid[0] / this.quantity[0]);
      this.averagebuyingprice.unshift(round);

      this.totalmoneypaid.unshift(this.moneypaidTemp[this.moneypaidTemp.length - 1]);

      // console.log("averagebuyingprice: " + this.averagebuyingprice[0]);


    }

    else {

      // computing total weight for weighted average formula
      this.weightedquantity[this.index] = this.quantity[this.index] + this.quantityTemp[this.quantityTemp.length - 1];
      // weight for old quantity / money
      this.partialoldaverage = this.quantity[this.index] / this.weightedquantity[this.index] * this.averagebuyingprice[this.index];
      // weight for new quantity / money
      this.partialnewaverage = this.quantityTemp[this.quantityTemp.length - 1] / this.weightedquantity[this.index] * (this.moneypaidTemp[this.moneypaidTemp.length - 1] / this.quantityTemp[this.quantityTemp.length - 1]);

      // final weighted average cost per item to help the user understand their selling target price per item
      this.averagebuyingprice[this.index] = this.partialnewaverage + this.partialoldaverage;

      // converting the number from double to integer to avoid decimal places
      for (var i = 0; i < this.averagebuyingprice.length; i++) {
        this.averagebuyingprice[i] = Math.ceil(this.averagebuyingprice[i]);
      }

      this.weightedquantity.unshift(this.weightedquantity[this.index]);
      this.averagebuyingprice.unshift(this.averagebuyingprice[this.index]);

      this.weightedquantity.splice(this.index + 1, 1);
      this.averagebuyingprice.splice(this.index + 1, 1);

      // total money paid for a specific item
      this.totalmoneypaid[this.index] += this.moneypaidTemp[this.moneypaidTemp.length - 1];
      this.quantity[this.index] = this.quantity[this.index] + this.quantityTemp[this.quantityTemp.length - 1];
      this.moneypaid[this.index] = this.moneypaid[this.index] + this.moneypaidTemp[this.moneypaidTemp.length - 1];


      this.totalmoneypaid.unshift(this.totalmoneypaid[this.index]);
      this.quantity.unshift(this.quantity[this.index]);
      this.moneypaid.unshift(this.moneypaid[this.index]);
      this.photos.unshift(this.photos[this.index]);


      this.totalmoneypaid.splice(this.index + 1, 1);
      this.quantity.splice(this.index + 1, 1);
      this.moneypaid.splice(this.index + 1, 1);
      this.photos.splice(this.index + 1, 1);


      this.buysameitem = false;
    }

    this.photosDebt.unshift(this.photosDebtTemp[this.photosDebtTemp.length - 1]);


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
    for (num = 0; num < this.photosDebtTemp.length; num++) {
      this.photosDebtTemp.splice(num, 1);
    }

    this.updateDataBase();

  }

  //procedure for selling products
  acceptaddition1() {

    if (this.isCashReceivedBoolean == true) {
      this.cash = this.cash + this.moneyreceivedTemp[this.moneyreceivedTemp.length - 1];
    }

    this.quantitySell.unshift(this.quantityTempSell[this.quantityTempSell.length - 1]);
    this.moneyReceived.unshift(this.moneyreceivedTemp[this.moneyreceivedTemp.length - 1]);
    this.photosSell.unshift(this.photosTempSell[this.photosTempSell.length - 1]);
    this.quantity[this.index] = this.quantity[this.index] - this.quantitySell[0];

    var num: number = 0;
    for (num = 0; num < this.quantityTempSell.length; num++) {
      this.quantityTemp.splice(num, 1);
    }
    for (num = 0; num < this.moneyreceivedTemp.length; num++) {
      this.moneyreceivedTemp.splice(num, 1);
    }
    for (num = 0; num < this.photosTempSell.length; num++) {
      this.photosTempSell.splice(num, 1);
    }


    console.log("NORMAL ADDITION");
    for (var i = 0; i < this.moneyReceived.length; i++)
      console.log("money received: " + this.moneyReceived[i] + "  " + "money credit: " + this.credit[i]);
    this.updateDataBase();
  }

  //delete a product
  deleteitem() {
    this.quantity.splice(this.index, 1);
    this.moneypaid.splice(this.index, 1);
    this.averagebuyingprice.splice(this.index, 1);
    this.totalmoneypaid.splice(this.index, 1);


    //CONSOLE ONLY checking the debt array
    for (var i = 0; i < this.photosDebt.length; i++) {
      console.log("debt array [" + i + "]: " + this.debt[i]);
    }
    //

    // deleting all debt related to the deleted item 
    for (var a = 0; a < this.photosDebt.length; a++) {
      if (this.photosDebt[a] == this.photos[this.index]) {
        this.photosDebt.splice(a, 1);
        this.debt.splice(a, 1);
        a--;
      }
    }

    //CONSOLE ONLY checking array debt after cancelling values
    for (var b = 0; b < this.photosDebt.length; b++) {
      console.log("debt array [" + b + "]: " + this.debt[b]);
    }
    //

    var sum = 0;
    for (var i = 0; i < this.debt.length; i++) {
      sum += this.debt[i];
    }

    if (sum == 0) {
      this.debtYes = false;
      console.log("debtYes is false and stored");
    }

    this.photos.splice(this.index, 1);
    this.updateDataBase();

  }

  //delete a sale
  deleteSell() {

    var match;
    //restoring the quantity in stock after deleting the sale
    for (var i = 0; i < this.photos.length; i++) {
      for (var a = 0; a < this.photosSell.length; a++) {
        if (this.photos[i] === this.photosSell[a] && this.quantitySell[a] == this.quantitySell[this.index]) {
          this.quantity[i] += this.quantitySell[this.index];
          match = true;
        }
        if (match)
          break;
      }
      if (match)
        break;
    }

    // diminishing the cash after deleting the sale
    if (this.credit[this.index] == 0)
      this.cash -= this.moneyReceived[this.index];
    if (this.cash < 0)
      this.cash = 0;

    this.quantitySell.splice(this.index, 1);
    this.moneyReceived.splice(this.index, 1);
    this.credit.splice(this.index, 1);
    this.photosSell.splice(this.index, 1);

    var sum = 0;

    for (var i = 0; i < this.credit.length; i++)
      sum += this.credit[i];

    if (sum != 0)
      this.creditYes = true;
    else
      this.creditYes = false;

    this.updateDataBase();
  }

  //speed voice regulator for iOS devices
  speedvoice() {
    if (this.device.platform.toString() == "iOS")
      this.speedVoice = 1.5;
  }

  //register the new credit
  registercredit() {

    this.credit.unshift(this.moneyreceivedTemp[this.moneyreceivedTemp.length - 1]);
    if (this.moneyreceivedTemp[this.moneyreceivedTemp.length - 1] != 0) {
      this.creditYes = true;
    }
    this.updateDataBase();
  }

  //collect money from sales
  collect() {

    this.credit[this.index] = this.credit[this.index] - this.creditRepay;
    this.cash = this.cash + this.creditRepay;

    for (var i = 0; i < this.credit.length; i++) {

      if (this.credit[i] > 0) {
        this.creditYes = true;
        console.log(this.credit[i]);
        break;
      } else {
        this.creditYes = false;
      }
    }

    this.updateDataBase();
  }

  //register the new debt
  registerdebt() {

    this.debt.unshift(this.moneypaidTemp[this.moneypaidTemp.length - 1]);


    if (this.moneypaidTemp[this.moneypaidTemp.length - 1] != 0) {
      this.debtYes = true;
    }

    console.log("array length:" + this.debt.length);
    console.log("debtYes:" + this.debtYes);

    this.updateDataBase();
  }


  //pay back for bought items
  repay() {
    this.debt[this.index] = this.debt[this.index] - this.debtRepay;
    this.cash = this.cash - this.debtRepay;
    if (this.cash < 0)
      this.cash = 0;

    for (var i = 0; i < this.debt.length; i++) {
      if (this.debt[i] > 0) {
        this.debtYes = true;
        console.log(this.debt[i]);
        break;
      } else {
        this.debtYes = false;
      }
    }

    this.updateDataBase();
  }
  //function executed when local storage needs to be updated
  updateDataBase() {
    this.storage.set('quantityArray', this.quantity);
    this.storage.set('photosArray', this.photos);
    this.storage.set('moneypaidArray', this.moneypaid);
    this.storage.set('totalmoneypaid', this.totalmoneypaid);

    this.storage.set('quantitySell', this.quantitySell);
    this.storage.set('moneyReceived', this.moneyReceived);
    this.storage.set('photosSell', this.photosSell);

    this.storage.set('debt', this.debt);
    this.storage.set('debtYes', this.debtYes);
    this.storage.set('photosDebt', this.photosDebt);

    this.storage.set('credit', this.credit);
    this.storage.set('creditYes', this.creditYes);


    this.storage.set('cash', this.cash);
    this.storage.set('photoProfile', this.photoProfile);

    this.storage.set('averagebuyingprice', this.averagebuyingprice);
    this.storage.set('weightedquantity', this.weightedquantity);

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

  //get values from local database
  getValuesFromDB() {
    this.storage.get('quantityArray').then((data) => {
      if (data != null) {
        this.quantity = data;
      }
    });
    this.storage.get('photosArray').then((data) => {
      if (data != null) {
        this.photos = data;
      }
    });
    this.storage.get('moneypaidArray').then((data) => {
      if (data != null) {
        this.moneypaid = data;
      }
    });
    this.storage.get('totalmoneypaid').then((data) => {
      if (data != null) {
        this.totalmoneypaid = data;
      }
    });
    this.storage.get('quantitySell').then((data) => {
      if (data != null) {
        this.quantitySell = data;
      }
    });
    this.storage.get('moneyReceived').then((data) => {
      if (data != null) {
        this.moneyReceived = data;
      }
    });
    this.storage.get('photosSell').then((data) => {
      if (data != null) {
        this.photosSell = data;
      }
    });

    this.storage.get('debt').then((data) => {
      if (data != null) {
        this.debt = data;
      }
    });
    this.storage.get('cash').then((data) => {
      if (data != null) {
        this.cash = data;
      }
    });
    this.storage.get('photoProfile').then((data) => {
      if (data != null) {
        this.photoProfile = data;
      }
    });
    this.storage.get('averagebuyingprice').then((data) => {
      if (data != null) {
        this.averagebuyingprice = data;
      }
    });
    this.storage.get('weightedquantity').then((data) => {
      if (data != null) {
        this.weightedquantity = data;
      }
    });
    this.storage.get('debtYes').then((data) => {
      if (data != null) {
        this.debtYes = data;
      }
    });
    this.storage.get('creditYes').then((data) => {
      if (data != null) {
        this.creditYes = data;
      }
    });
    this.storage.get('credit').then((data) => {
      if (data != null) {
        this.credit = data;
      }
    });
    this.storage.get('photosDebt').then((data) => {
      if (data != null) {
        this.photosDebt = data;
      }
    });
  }

}
