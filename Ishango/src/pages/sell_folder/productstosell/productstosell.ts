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
   private photosSell = [];


  constructor(public navCtrl: NavController, public sharedprovider: SharedProvider) {
    this.photos = this.sharedprovider.photos;
    this.photosSell = this.sharedprovider.photosSell;
    this.quantity = this.sharedprovider.quantitySell;
    this.moneyreceived = this.sharedprovider.moneyReceived;

  }

  //allow sales only if at least one product has been bought
  gotoaddnewsale() {
    if(this.photos.length > 0){
      this.navCtrl.push(AddnewsalePage);
    }
  }

  producesound (preset) {
    if(preset==1)
    {
      this.sharedprovider.producesound("In this screen appear all the products you have sold");
    }
    else if (preset==2)
    {
      this.sharedprovider.producesound("this column shows a photo of your sold product");
    }
    else if (preset==3)
    {
      this.sharedprovider.producesound("this column shows the quantity of your sold product");
    }
     
  }

//!!!!!! delete everything not just page variables!
  delete(index){
alert("mammt in index");
  this.photos.splice(index, 1);
}



}
