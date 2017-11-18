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
    this.sharedprovider.acceptaddition();

    this.navCtrl.setRoot(ProductstobuyPage);
    
    

    
  }
  cashnotpaid() {
    this.sharedprovider.acceptaddition();

    this.navCtrl.setRoot(ProductstobuyPage);
 
  }


  producesound () {
       this.sharedprovider.producesound("If you paid for the items click the blue button. If you paid on credit, click the red button");
  }

}
