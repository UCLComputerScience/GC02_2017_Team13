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
    this.sharedprovider.producesound("Choose whether you collected your money or sold on credit!");
  }

  producesound (preset) {

    if (preset==1)
    {
      this.sharedprovider.producesound("if you collected the money from your sales, click on the right button");
    }
    else if (preset==2)
    {
      this.sharedprovider.producesound("if you did not collect the money from your sales, click on the left button");
    }

  }
  
  cashnotreceived() {
    this.sharedprovider.registercredit();
    this.sharedprovider.isCashReceivedBoolean = false;
    this.sharedprovider.acceptaddition1();
    this.navCtrl.setRoot(ProductstosellPage);
  }




}
