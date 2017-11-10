import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsPage } from '../../pages/products/products';
import { QuantityProvider } from '../../providers/quantity/quantity';
/**
 * Generated class for the IscashpaidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iscashpaid',
  templateUrl: 'iscashpaid.html',
})
export class IscashpaidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public quantityprovider: QuantityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IscashpaidPage');
  }

  cashpaid() {
    this.quantityprovider.acceptaddition();

    this.navCtrl.setRoot(ProductsPage);
    
  }
  cashnotpaid() {
    this.quantityprovider.acceptaddition();

    this.navCtrl.setRoot(ProductsPage);
  }




}
