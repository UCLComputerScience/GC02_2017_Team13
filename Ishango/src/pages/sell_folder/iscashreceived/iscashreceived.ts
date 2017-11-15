import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductstosellPage } from '../productstosell/productstosell';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
/**
 * Generated class for the IscashpaidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iscashreceived',
  templateUrl: 'iscashreceived.html',
})
export class IscashreceivedPage {
 

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IscashpaidPage');
  }

  cashreceived() {
    this.sharedprovider.acceptaddition();

    this.navCtrl.setRoot(ProductstosellPage);
    
    

    
  }
  cashnotreceived() {
    this.sharedprovider.acceptaddition();

    this.navCtrl.setRoot(ProductstosellPage);
 
  }




}
