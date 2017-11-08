import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IscashpaidPage } from '../../pages/iscashpaid/iscashpaid';

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
  public moneypaid = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuantityPage');
  }

  increment(amount) {
    this.moneypaid = this.moneypaid + amount;
  }

  reduce(amount) {
    this.moneypaid = this.moneypaid - amount;
  }
  gotoiscashpaid() {
    this.navCtrl.push(IscashpaidPage);
  }

}
