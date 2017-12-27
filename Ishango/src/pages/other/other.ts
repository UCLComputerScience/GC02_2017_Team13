import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllrecordingsPage } from '../features/allrecordings/allrecordings';
import { SalesarchivePage } from '../archive/salesarchive/salesarchive';
import { RunningcarchivePage } from '../archive/runningcarchive/runningcarchive';

/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  gotofeaturespage(){
        this.navCtrl.push(AllrecordingsPage);
  }

  gotosalesarchive(){
      this.navCtrl.push(SalesarchivePage);
  }

gotorunningcarchive(){
        this.navCtrl.push(RunningcarchivePage);
}


}
