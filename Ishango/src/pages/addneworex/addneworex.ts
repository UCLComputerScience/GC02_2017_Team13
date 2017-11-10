import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotosoundPage } from '../../pages/photosound/photosound';
import { QuantityPage } from '../../pages/quantity/quantity';
import { QuantityProvider } from '../../providers/quantity/quantity';

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
  private photos=[];
  private quantity=[];
  private moneypaid=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public quantityprovider: QuantityProvider) {

    this.photos=this.quantityprovider.photos;
    this.quantity = this.quantityprovider.quantity;
    this.moneypaid = this.quantityprovider.moneypaid;
  }

  gotophotosound() {
    this.navCtrl.push(PhotosoundPage);
  }
  buymoreofthesame(index){
    this.quantityprovider.buysameitem=true;
    this.quantityprovider.index=0;
    this.navCtrl.push(QuantityPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddneworexPage');
  }

}
