import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddnewsalePage } from '../addnewsale/addnewsale';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';

@Component({
  selector: 'page-productstosell',
  templateUrl: 'productstosell.html'
})
export class ProductstosellPage {
  private photos = [];
   private quantity = [];
   private moneyreceived = [];


  constructor(public navCtrl: NavController, public sharedprovider: SharedProvider) {
    this.photos = this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantitySell;
    this.moneyreceived = this.sharedprovider.moneyReceived;

  }

  //allow sales only if at least one product has been bought
  gotoaddnewsale() {
    if(this.photos.length > 0){
      this.navCtrl.push(AddnewsalePage);
    }

  }



}
