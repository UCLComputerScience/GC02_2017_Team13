import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotosoundPage } from '../../pages/photosound/photosound';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  public hideTabs:boolean = false;

  constructor(public navCtrl: NavController) {

  }
  gotophotosound(){

    this.navCtrl.push(PhotosoundPage);
  }



}
