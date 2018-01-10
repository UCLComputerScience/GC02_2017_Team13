import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { HomePage } from '../../../pages/home/home';

/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
  }

  confirm() {
    this.sharedprovider.repay();
    this.navCtrl.setRoot(HomePage);
  }
  cancel() {
    this.navCtrl.setRoot(HomePage);
  }
  producesound() {
    this.sharedprovider.producesound("Are you sure that you want to repay the money?");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
  }

}
