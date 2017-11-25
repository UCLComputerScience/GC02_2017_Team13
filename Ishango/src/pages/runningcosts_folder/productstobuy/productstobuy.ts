import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotobuyPage } from '../photobuy/photobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { AddneworexPage } from '../addneworex/addneworex';
import { DeleteitemPage } from '../../../pages/buy_folder/deleteitem/deleteitem';


@Component({
  selector: 'page-productstobuy',
  templateUrl: 'productstobuy.html'
})
export class ProductstobuyPage {
  private photos=[];
   private quantity=[];
   private moneypaid=[];


  constructor(public navCtrl: NavController, public sharedprovider: SharedProvider) {
    this.photos = this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
    this.moneypaid = this.sharedprovider.moneypaid;

  }

  gotoneworexisting() {
    this.navCtrl.push(AddneworexPage);
  }

  gotodeleteitem(id){
    this.sharedprovider.index=id;
    this.navCtrl.push(DeleteitemPage);

  }

  producesound () {
     this.sharedprovider.producesound("In this screen appear all the products you have bought");
  }

}
