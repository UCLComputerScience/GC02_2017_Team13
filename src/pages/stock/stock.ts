
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { SharedProvider } from '../../providers/sharedprovider/sharedprovider';

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



  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {

    this.photos = this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
    // this.photoMoney.push(this.moneypaid, this.photoMoney);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');
  }

  itemReordered($event){
    reorderArray(this.quantity, $event);

  }

}