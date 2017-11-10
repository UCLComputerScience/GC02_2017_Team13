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
 

  constructor(public QuantityProvider: QuantityProvider, public navCtrl: NavController, public navParams: NavParams) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IscashpaidPage');
  }

  cashpaid() {

    this.navCtrl.setRoot(ProductsPage);
    
    

    
  }
  cashnotpaid() {

    this.navCtrl.setRoot(ProductsPage);
 
  }




}
