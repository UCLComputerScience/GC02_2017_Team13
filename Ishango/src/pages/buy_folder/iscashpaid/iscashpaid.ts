import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductstobuyPage } from '../productstobuy/productstobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';


@IonicPage()
@Component({
  selector: 'page-iscashpaid',
  templateUrl: 'iscashpaid.html',
})
export class IscashpaidPage {


  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IscashpaidPage');
  }

  cashpaid() {

    if(this.sharedprovider.moneypaidTemp[this.sharedprovider.moneypaidTemp.length-1] <= this.sharedprovider.cash){
      this.sharedprovider.debt.unshift(0);
      this.sharedprovider.isCashPaidBoolean = true;
      this.sharedprovider.acceptaddition();
      this.navCtrl.setRoot(ProductstobuyPage);
    } else {
      this.producesoundnotenoughcash();
    }

  }

  producesoundnotenoughcash () {
    this.sharedprovider.producesound("you do not have enough cash to pay entirely with money!");
  }



  cashnotpaid() {
    this.sharedprovider.registerdebt();
    this.sharedprovider.isCashPaidBoolean = false;


    this.sharedprovider.acceptaddition();
    this.navCtrl.setRoot(ProductstobuyPage);

  }


  producesoundGeneral() {
    this.sharedprovider.producesound("Choose whether you paid for your purchases or bought on credit!");
  }

  producesound (preset) {

    if (preset==1)
    {
      this.sharedprovider.producesound("if you paid for your purchases, click on the right button");
    }
    else if (preset==2)
    {
      this.sharedprovider.producesound("if you did not pay for your purchases, click on the left button");
    }

  }

}
