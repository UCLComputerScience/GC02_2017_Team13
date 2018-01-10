import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductstosellPage } from '../productstosell/productstosell';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';


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
    this.sharedprovider.credit.unshift(0);
    this.sharedprovider.isCashReceivedBoolean = true;
    this.sharedprovider.acceptaddition1();
    this.navCtrl.setRoot(ProductstosellPage);
  }

  producesoundGeneral() {
    this.sharedprovider.producesound("Click on the green button if your customer paid you. Otherwise, click on the red button if you sold on credit!");
  }
  
  cashnotreceived() {
    this.sharedprovider.registercredit();
    this.sharedprovider.isCashReceivedBoolean = false;
    this.sharedprovider.acceptaddition1();
    this.navCtrl.setRoot(ProductstosellPage);
  }




}
