import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { CreaterecordingPage } from '../../../pages/features/createrecording/createrecording';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';



@IonicPage()
@Component({
  selector: 'page-features',
  templateUrl: 'features.html',
})
export class FeaturesPage {
  public recordingID=[];



  constructor(public navCtrl: NavController,public sharedprovider:SharedProvider,public recordingprovider: CustomTrackProvider, public navParams: NavParams) {
    this.recordingID=this.recordingprovider.recordingID;
  }

  playrecording(id)
  {
    this.recordingprovider.playRecord(id);
  }



  gotocreaterecording(id){
    this.recordingprovider.indexrec=id;
    this.navCtrl.push(CreaterecordingPage);
  }



  producesound(presets){
    if (presets==1)
    {
      this.sharedprovider.producesound("In this page, you can create custom recording");
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturesPage');
  }
}
