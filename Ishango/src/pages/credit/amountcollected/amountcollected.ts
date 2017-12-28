import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { ConfirmationcreditPage } from '../../../pages/credit/confirmationcredit/confirmationcredit';

/**
 * Generated class for the AmountcollectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amountcollected',
  templateUrl: 'amountcollected.html',
})
export class AmountcollectedPage {

  amountcollected = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
  }

  increment(amount) {
    this.amountcollected = this.amountcollected + amount;
    if(this.sharedprovider.credit[this.sharedprovider.index] - this.amountcollected < 0){
      this.amountcollected = this.sharedprovider.credit[this.sharedprovider.index];
      this.sharedprovider.producesound("You cannot collect more money than they owe you");
    
    }
  }

  reduce(amount) {
    if (this.amountcollected - amount >= 0)
    {
    this.amountcollected = this.amountcollected - amount;
    }
    else{
      this.amountcollected = 0;
    }
  }
  gotoconfirmation() {
    this.sharedprovider.creditRepay = this.amountcollected;
    this.navCtrl.push(ConfirmationcreditPage);

  }

  producesound() {
    this.sharedprovider.producesound("Please choose how much money you want to collect");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmountcollectedPage');
  }

}
