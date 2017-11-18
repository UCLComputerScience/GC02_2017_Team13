import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { IscashpaidPage } from '../iscashpaid/iscashpaid';

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

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  increment(amount) {
    this.moneypaid= this.moneypaid + amount;
  }

  reduce(amount) {
    if (this.moneypaid-amount>=0){
    this.moneypaid = this.moneypaid - amount;}
  }

  gotoiscashpaid() {
    if (this.moneypaid>0){
    this.sharedprovider.moneypaidTemp.push(this.moneypaid);
    this.navCtrl.push(IscashpaidPage);}
  }

   producesound () {
     this.sharedprovider.producesound("Enter how much money you paid for your purchase");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneypaidPage');
  }

}
