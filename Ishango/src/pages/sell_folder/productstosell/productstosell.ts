import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddnewsalePage } from '../addnewsale/addnewsale';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { DeletesellPage } from '../../../pages/sell_folder/deletesell/deletesell';

@Component({
  selector: 'page-productstosell',
  templateUrl: 'productstosell.html'
})
export class ProductstosellPage {
   private photos = [];
   private quantity = [];
   private moneyreceived = [];
   private photosSell = [];
   private background;

  constructor(public navCtrl: NavController, public sharedprovider: SharedProvider) {
    this.photos = this.sharedprovider.photos;
    this.photosSell = this.sharedprovider.photosSell;
    this.quantity = this.sharedprovider.quantitySell;
    this.moneyreceived = this.sharedprovider.moneyReceived;

  }


  ionViewDidEnter(){

    if(this.photosSell.length > 0){
      this.background = false;
    }
    else
      this.background = true;
}

  //allow sales only if at least one product has been bought
  gotoaddnewsale() {
    if(this.photos.length > 0){
      this.navCtrl.push(AddnewsalePage);
    }
    else
    {
      this.sharedprovider.producesound("You don't have items to sell")
    }
  }

  deleteSell(id)
  {
    this.sharedprovider.index=id;
    this.navCtrl.push(DeletesellPage);
  }

  producesound (preset) {
    if(preset==1)
    {
      this.sharedprovider.producesound("This page shows your sales");
    }
    else if (preset==2)
    {
      this.sharedprovider.producesound("the values in this column represent the money you received from your sales");
    }
    else if (preset==3)
    {
      this.sharedprovider.producesound("this column shows the quantity of your sold products");
    }
     
  }



}
