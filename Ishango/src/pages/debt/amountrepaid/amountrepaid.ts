import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { ConfirmationPage } from '../../../pages/debt/confirmation/confirmation';


@IonicPage()
@Component({
  selector: 'page-amountrepaid',
  templateUrl: 'amountrepaid.html',
})
export class AmountrepaidPage {
  amountrepaid = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
  }

  increment(amount) {

    this.amountrepaid = this.amountrepaid + amount;

    if (this.amountrepaid > this.sharedprovider.cash) {
      this.amountrepaid = this.sharedprovider.cash;
      this.sharedprovider.producesound("You reached your cash limit");
      return;

    } else {

      if (this.sharedprovider.debt[this.sharedprovider.index] - this.amountrepaid < 0) {
        this.amountrepaid = this.sharedprovider.debt[this.sharedprovider.index];
        this.sharedprovider.producesound("You cannot repay more than you owe");

      }
    }
  }

  reduce(amount) {
    if (this.amountrepaid - amount >= 0) {
      this.amountrepaid = this.amountrepaid - amount;
    }
    else {
      this.amountrepaid = 0;
    }
  }
  gotoconfirmation() {
    this.sharedprovider.debtRepay = this.amountrepaid;
    this.navCtrl.push(ConfirmationPage);

  }

  producesound() {
    this.sharedprovider.producesound("Please choose how much money you want to repay");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmountrepaidPage');
  }

}
