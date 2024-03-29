import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { AmountrepaidPage } from '../../../pages/debt/amountrepaid/amountrepaid';


@IonicPage()
@Component({
  selector: 'page-debtperproduct',
  templateUrl: 'debtperproduct.html',
})
export class DebtperproductPage {
  private photos = [];
  public debt = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
    this.photos = this.sharedprovider.photosDebt;
    this.debt = this.sharedprovider.debt;
  }

  gotorepaypage(id) {
    this.sharedprovider.index = id;
    this.navCtrl.push(AmountrepaidPage);

  }


  producesound() {
    this.sharedprovider.producesound("In this screen you can see your debt for each purchase");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebtperproductPage');
  }

}
