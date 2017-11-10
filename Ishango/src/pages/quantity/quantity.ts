import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneypaidPage } from '../../pages/moneypaid/moneypaid';
import { QuantityProvider } from '../../providers/quantity/quantity';
/**
 * Generated class for the QuantityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quantity',
  templateUrl: 'quantity.html',
})
export class QuantityPage {
  public quantity = 0;

  constructor(public quantityprovider: QuantityProvider, public navCtrl: NavController, public navParams: NavParams ) {
  }

  increment(amount) {
    this.quantity= this.quantity + amount;
  }

  reduce(amount) {
    if (this.quantity-amount>=0){
    this.quantity = this.quantity - amount;}
  }

  gotoiscashpaid() {
    if (this.quantity>0){
    this.quantityprovider.quantity.push(this.quantity);
    this.navCtrl.push(MoneypaidPage);}
  }

}
