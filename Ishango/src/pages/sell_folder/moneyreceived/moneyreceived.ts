import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { IscashreceivedPage } from '../iscashreceived/iscashreceived';

/**
 * Generated class for the moneyreceivedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moneyreceived',
  templateUrl: 'moneyreceived.html',
})
export class MoneyreceivedPage {
  
  moneyreceived = 0;
  averagebuyingprice;
  quantity;
  index;
  suggestedprice;
  isRed = false;

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams ) {
   this.index = this.sharedprovider.index;
   this.quantity = this.sharedprovider.quantityTempSell[this.sharedprovider.quantityTempSell.length - 1];
   this.averagebuyingprice = this.sharedprovider.averagebuyingprice[this.index];
   this.suggestedprice = this.averagebuyingprice * this.quantity;
  }

  increment(amount) {
    this.moneyreceived = this.moneyreceived + amount;

    if(this.moneyreceived - this.suggestedprice > 0){
      this.isRed = true;
    }
  }

  reduce(amount) {
    if (this.moneyreceived - amount>=0){
    this.moneyreceived = this.moneyreceived - amount;
  }
    else {
      this.moneyreceived = 0;
    }
if(this.moneyreceived - this.suggestedprice <= 0){
      this.isRed = false;
    }

  }

  gotoiscashreceived() {
    
    this.sharedprovider.moneyreceivedTemp.push(this.moneyreceived);
    this.navCtrl.push(IscashreceivedPage);

  }

  producesound () {
    this.sharedprovider.producesound("Enter how much money you received for this sale");
}

  ionViewDidLoad() {
    console.log('index: ' + this.index);
    console.log('quantity: ' + this.sharedprovider.quantityTempSell[this.sharedprovider.quantityTempSell.length - 1]);
    console.log('weighted price: ' + this.sharedprovider.averagebuyingprice[this.index]);
    console.log('suggested: ' + this.averagebuyingprice * this.quantity[this.index]);

    for(var i = 0; i < this.sharedprovider.averagebuyingprice.length; i++){
      console.log('in weighted loop position ' + i + ": " + this.sharedprovider.averagebuyingprice[i]);
    }
  }

}
