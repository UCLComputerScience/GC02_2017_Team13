import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuantitytosellPage } from '../quantitytosell/quantitytosell';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';

/**
 * Generated class for the AddneworexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnewsale',
  templateUrl: 'addnewsale.html',
})
export class AddnewsalePage {
  private photos = [];
  private quantity = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {

    this.photos=this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
  }

  gotoquantitytosell(index) {
    this.sharedprovider.index=index;
    this.navCtrl.push(QuantitytosellPage);
    // console.log(index);
  }  
  
  producesound () {
       this.sharedprovider.producesound("Select the item that you are selling");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddneworexPage');
  }


}
