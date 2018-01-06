import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { AllrecordingsPage } from '../../../pages/features/allrecordings/allrecordings';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';



@IonicPage()
@Component({
  selector: 'page-deleterecording',
  templateUrl: 'deleterecording.html',
})
export class DeleterecordingPage {

  constructor(public recordingprovider: CustomTrackProvider,public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {
  }

  yes() {
    this.recordingprovider.deleterec();
    this.navCtrl.setRoot(AllrecordingsPage);
  }
  no() {
    this.navCtrl.setRoot(AllrecordingsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleterecordingPage');
  }


  producesound(){
    this.sharedprovider.producesound("If you want to delete the recording, press the green button. Otherwise, press the red button.");
  }

}
