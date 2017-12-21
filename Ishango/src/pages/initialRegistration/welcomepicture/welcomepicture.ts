import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { CashregisterPage } from '../../../pages/initialRegistration/cashregister/cashregister';



/**
 * Generated class for the WelcomepicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomepicture',
  templateUrl: 'welcomepicture.html',
})
export class WelcomepicturePage {

public photoProfile;


  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
  
  this.photoProfile = this.sharedprovider.photoProfile;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomepicturePage');
  }

  gotocashregister() {

    this.navCtrl.push(CashregisterPage);
   
   }


}