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
    this.sharedprovider.acceptaddition1();
    this.navCtrl.setRoot(ProductstosellPage);
  }
  
  producesound () {
    this.sharedprovider.producesound("If you paid for the items click the green button. If you paid on credit, click the red button");
}



  cashnotreceived() {
    this.sharedprovider.acceptaddition1();
    this.navCtrl.setRoot(ProductstosellPage);
 
  }




}
