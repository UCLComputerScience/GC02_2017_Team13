import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { IscashreceivedPage } from '../iscashreceived/iscashreceived';


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
  //increment the amount of money displayed
  increment(amount) {
    this.moneyreceived = this.moneyreceived + amount;

    if(this.moneyreceived - this.suggestedprice > 0){
      this.isRed = true;
    }
  }
  //decrement the amount of money displayed
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
  // go the next page where the user selects whether cash was paid or owed.
  gotoiscashreceived() {
    
    this.sharedprovider.moneyreceivedTemp.push(this.moneyreceived);
    this.navCtrl.push(IscashreceivedPage);

  }
  //function executed when voice feedback is required
  producesound () {
    this.sharedprovider.producesound("Enter how much money you received for your sale");
}


}
