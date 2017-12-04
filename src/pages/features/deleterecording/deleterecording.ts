import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { FeaturesPage } from '../../../pages/features/allrecordings/features';


@IonicPage()
@Component({
  selector: 'page-deleterecording',
  templateUrl: 'deleterecording.html',
})
export class DeleterecordingPage {

  constructor(public recordingprovider: CustomTrackProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  yes() {
    this.recordingprovider.deleterec();
    this.navCtrl.setRoot(FeaturesPage);
  }
  no() {
    this.navCtrl.setRoot(FeaturesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleterecordingPage');
  }

}
