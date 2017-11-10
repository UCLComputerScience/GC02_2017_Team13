import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuantityProvider } from '../../providers/quantity/quantity';
import { IscashpaidPage } from '../../pages/iscashpaid/iscashpaid';

/**
 * Generated class for the MoneypaidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moneypaid',
  templateUrl: 'moneypaid.html',
})
export class MoneypaidPage {
  moneypaid=0;

  constructor(public quantityprovider: QuantityProvider, public navCtrl: NavController, public navParams: NavParams ) {
  }

  increment(amount) {
    this.moneypaid= this.moneypaid + amount;
  }

  reduce(amount) {
    this.moneypaid = this.moneypaid - amount;
  }

  gotoiscashpaid() {
    this.quantityprovider.moneypaid.push(this.moneypaid);
    this.navCtrl.push(IscashpaidPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneypaidPage');
  }

}
