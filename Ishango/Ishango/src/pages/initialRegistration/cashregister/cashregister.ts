import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../../pages/tabs/tabs';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';



@IonicPage()
@Component({
  selector: 'page-cashregister',
  templateUrl: 'cashregister.html',
})
export class CashregisterPage {
  public cash = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
  }


  increment(amount) {
    this.cash = this.cash + amount;
  }

  reduce(amount) {
    if (this.cash - amount >= 0) {
      this.cash = this.cash - amount;
    }
    else {
      this.cash = 0;
    }
  }

  producesound() {
    this.sharedprovider.producesound("Please enter your initial amount of money");
  }



  gohome() {
    this.sharedprovider.cash = this.cash;
    this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
