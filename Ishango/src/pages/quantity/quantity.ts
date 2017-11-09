import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IscashpaidPage } from '../../pages/iscashpaid/iscashpaid';
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
  public moneypaid;

  constructor(public quantityprovider: QuantityProvider, public navCtrl: NavController, public navParams: NavParams ) {
  }

  increment(amount) {
    this.moneypaid= this.moneypaid + amount;
  }

  reduce(amount) {
    this.moneypaid = this.moneypaid - amount;
  }

  gotoiscashpaid() {
    this.quantityprovider.moneypaid=this.moneypaid;
    this.navCtrl.push(IscashpaidPage);
  }

}
