import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { CreaterecordingPage } from '../../../pages/features/createrecording/createrecording';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { DeleterecordingPage } from '../../../pages/features/deleterecording/deleterecording';



@Component({
  selector: 'page-allrecordings',
  templateUrl: 'allrecordings.html',
})
export class AllrecordingsPage {
  public recordingNames=[];
  public background1;

  constructor(public navCtrl: NavController,public sharedprovider:SharedProvider,public recordingprovider: CustomTrackProvider) {
    
  }

  ionViewDidEnter(){
    this.recordingNames=this.recordingprovider.recordingNames2;
    console.log(this.recordingNames.length);
    if(this.recordingNames.length == 0){
      this.background1 = true;
    } else {
      this.background1 = false;
    }
  

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
      this.sharedprovider.producesound("In this page, you can create customized recordings");
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturesPage');
  }
}
