import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotosoundPage } from '../photosound/photosound';
import { QuantityProvider } from '../../../providers/quantity/quantity';
import { AddneworexPage } from '../addneworex/addneworex';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  private photos=[];
   private quantity=[];
   private moneypaid=[];


  constructor(public navCtrl: NavController, public quantityprovider: QuantityProvider) {
    this.photos=this.quantityprovider.photos;
    this.quantity = this.quantityprovider.quantity;
    this.moneypaid = this.quantityprovider.moneypaid;

  }



  gotoneworexisting() {
    this.navCtrl.push(AddneworexPage);
  }



}
