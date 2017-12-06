import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { CreaterecordingPage } from '../../../pages/features/createrecording/createrecording';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { DeleterecordingPage } from '../../../pages/features/deleterecording/deleterecording';



@IonicPage()
@Component({
  selector: 'page-features',
  templateUrl: 'features.html',
})
export class FeaturesPage {
  public recordingNames=[];

  constructor(public navCtrl: NavController,public sharedprovider:SharedProvider,public recordingprovider: CustomTrackProvider, public navParams: NavParams) {
    
  }

  ionViewDidEnter(){
    this.recordingNames=this.recordingprovider.recordingNames2;
  }

  playrecording(id)
  {
    this.recordingprovider.playRecord(id);
  }

  gotocreaterecording(id){
    this.recordingprovider.totalrecords=this.recordingprovider.totalrecords+1;
    this.navCtrl.push(CreaterecordingPage);
  }

  deleterecording(id){
    this.recordingprovider.indexrec=id;
    this.navCtrl.push(DeleterecordingPage);
  }

  producesound(presets){
    if (presets==1)
    {
      this.sharedprovider.producesound("In this page, you can create custom recordings");
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturesPage');
  }
}
