import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { HomePage } from '../../../pages/home/home';




@IonicPage()
@Component({
  selector: 'page-confirmationcredit',
  templateUrl: 'confirmationcredit.html',
})
export class ConfirmationcreditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sharedprovider: SharedProvider) {
  }

  confirm() {
    this.sharedprovider.collect();
    this.navCtrl.setRoot(HomePage);
  }
  cancel() {
    this.navCtrl.setRoot(HomePage);
  }
  producesound() {
    this.sharedprovider.producesound("Are you sure you want to collect the money?");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationcreditPage');
  }

}
