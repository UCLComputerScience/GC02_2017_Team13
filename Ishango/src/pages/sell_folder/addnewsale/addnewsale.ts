import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuantitytosellPage } from '../quantitytosell/quantitytosell';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';


@IonicPage()
@Component({
  selector: 'page-addnewsale',
  templateUrl: 'addnewsale.html',
})
export class AddnewsalePage {
  private photos = [];
  private quantity = [];
  private averagebuyingprice = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {

    this.photos = this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
    this.averagebuyingprice = this.sharedprovider.averagebuyingprice;

  }

  gotoquantitytosell(index) {
    this.sharedprovider.index = index;
    this.sharedprovider.photosTempSell.push(this.photos[index]) 
    // console.log(this.photos[index]);
    this.navCtrl.push(QuantitytosellPage);
    // console.log(index);
  }  
  
  producesound () {
       this.sharedprovider.producesound("Select the item that you are selling");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddneworexPage');
    }


}
