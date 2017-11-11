
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuantityProvider } from '../../providers/quantity/quantity';

/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {

  public reorderIsEnabled = false;
  private photos=[];
  private quantity=[];
   // private photoMoney = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, public quantityprovider: QuantityProvider) {

    this.photos = this.quantityprovider.photos;
    this.quantity = this.quantityprovider.quantity;
    // this.photoMoney.push(this.moneypaid, this.photoMoney);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');
  }

}