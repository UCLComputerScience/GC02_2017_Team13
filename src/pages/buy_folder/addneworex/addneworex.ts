import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotobuyPage } from '../photobuy/photobuy';
import { QuantitytobuyPage } from '../quantitytobuy/quantitytobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';

/**
 * Generated class for the AddneworexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addneworex',
  templateUrl: 'addneworex.html',
})
export class AddneworexPage {
  private photos = [];
  private quantity = [];
  private moneypaid = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {

    this.photos=this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
    this.moneypaid = this.sharedprovider.moneypaid;
  }

  gotophotobuy() {
    this.navCtrl.push(PhotobuyPage);
  }
  buymoreofthesame(index){
    this.sharedprovider.buysameitem=true;
    this.sharedprovider.index=index;
    this.navCtrl.push(QuantitytobuyPage);
    

  }

producesound () {
       this.sharedprovider.producesound("In this page you can add a purchase of a new product or of a product that you had already bought");
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddneworexPage');
  }


}
