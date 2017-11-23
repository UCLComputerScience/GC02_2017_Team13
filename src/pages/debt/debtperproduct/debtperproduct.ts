import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';

/**
 * Generated class for the DebtperproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-debtperproduct',
  templateUrl: 'debtperproduct.html',
})
export class DebtperproductPage {
  private photos=[];
  public debt=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public sharedprovider: SharedProvider) {
    this.photos = this.sharedprovider.photos;
    this.debt=this.sharedprovider.debt;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebtperproductPage');
  }

}
