import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { PhotosoundPage } from '../../pages/photosound/photosound';
import { QuantityProvider } from '../../providers/quantity/quantity';
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {


  constructor(public navCtrl: NavController, public quantityprovider: QuantityProvider) {

  }
  gotophotosound(){
    this.navCtrl.push(PhotosoundPage);
  }
  
  private moneypaid=this.quantityprovider.moneypaid;


}
