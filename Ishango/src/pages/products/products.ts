import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotosoundPage } from '../../pages/photosound/photosound';
import { QuantityProvider } from '../../providers/quantity/quantity';
import { AddneworexPage } from '../../pages/addneworex/addneworex';

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



  gotophotosound() {
    this.navCtrl.push(AddneworexPage);
  }



}
