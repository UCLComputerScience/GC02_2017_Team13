import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyreceivedPage } from '../moneyreceived/moneyreceived';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
/**
 * Generated class for the QuantityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quantitytosell',
  templateUrl: 'quantitytosell.html',
})
export class QuantitytosellPage {
  public quantity = 0;

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams ) {
  }

  increment(amount) {
    this.quantity= this.quantity + amount;
  }

  reduce(amount) {
    if (this.quantity-amount>=0){
    this.quantity = this.quantity - amount;}
  }

  gotoiscashreceived() {
    if (this.quantity>0){
    this.sharedprovider.quantityTemp.push(this.quantity);
    this.navCtrl.push(MoneyreceivedPage);}
  }

}
