import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { IscashpaidPage } from '../iscashpaid/iscashpaid';

@IonicPage()
@Component({
  selector: 'page-moneypaid',
  templateUrl: 'moneypaid.html',
})
export class MoneypaidPage {
  moneypaid = 0;

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  increment(amount) {
    this.moneypaid = this.moneypaid + amount;
  }

  reduce(amount) {
    if (this.moneypaid - amount >= 0) {
      this.moneypaid = this.moneypaid - amount;
    }
    else {
      this.moneypaid = 0;
    }
  }

  gotoiscashpaid() {
    this.sharedprovider.moneypaidTemp.push(this.moneypaid);
    this.navCtrl.push(IscashpaidPage)
  }

  producesound() {
    this.sharedprovider.producesound("Enter the money you paid for your goods");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneypaidPage');
  }

}
