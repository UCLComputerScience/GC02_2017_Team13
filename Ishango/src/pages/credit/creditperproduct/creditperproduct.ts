import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { AmountcollectedPage } from '../../../pages/credit/amountcollected/amountcollected';


@IonicPage()
@Component({
  selector: 'page-creditperproduct',
  templateUrl: 'creditperproduct.html',
})
export class CreditperproductPage {

  private photos = [];
  public credit = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
    this.photos = this.sharedprovider.photosSell;
    this.credit = this.sharedprovider.credit;

  }

  gotocollectpage(id) {
    this.sharedprovider.index = id;
    this.navCtrl.push(AmountcollectedPage);

  }

  producesound() {
    this.sharedprovider.producesound("In this page you can see the goods you sold on credit");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditperproductPage');
  }

}
