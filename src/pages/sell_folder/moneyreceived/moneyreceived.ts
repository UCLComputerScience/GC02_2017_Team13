import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { IscashreceivedPage } from '../iscashreceived/iscashreceived';

/**
 * Generated class for the moneyreceivedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moneyreceived',
  templateUrl: 'moneyreceived.html',
})
export class MoneyreceivedPage {
  moneyreceived = 0;

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams ) {
  }

  increment(amount) {
    this.moneyreceived= this.moneyreceived + amount;
  }

  reduce(amount) {
    if (this.moneyreceived-amount>=0){
    this.moneyreceived = this.moneyreceived - amount;}
  }

  gotoiscashreceived() {
    if (this.moneyreceived>0){
    this.sharedprovider.moneyreceivedTemp.push(this.moneyreceived);
    this.navCtrl.push(IscashreceivedPage);}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad moneyreceivedPage');
  }

}
