import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotobuyPage } from '../photobuy/photobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { AddneworexPage } from '../addneworex/addneworex';

@Component({
  selector: 'page-productstobuy',
  templateUrl: 'productstobuy.html'
})
export class ProductstobuyPage {
  private photos=[];
   private quantity=[];
   private moneypaid=[];


  constructor(public navCtrl: NavController, public sharedprovider: SharedProvider) {
    this.photos=this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
    this.moneypaid = this.sharedprovider.moneypaid;

  }



  gotoneworexisting() {
    this.navCtrl.push(AddneworexPage);
  }



}
