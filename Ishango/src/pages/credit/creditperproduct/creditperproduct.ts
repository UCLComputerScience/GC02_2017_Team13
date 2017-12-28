import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { AmountcollectedPage } from '../../../pages/credit/amountcollected/amountcollected';

/**
 * Generated class for the CreditperproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  gotocollectpage(id){
    this.sharedprovider.index = id;
    this.navCtrl.push(AmountcollectedPage);

  }

  producesound() {
    this.sharedprovider.producesound("In this screen you can see the your items sold on credit");
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditperproductPage');
  }

}
