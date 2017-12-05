import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { MediaPlugin } from 'ionic-native';
import { FeaturesPage } from '../../../pages/features/allrecordings/features';

@IonicPage()
@Component({
  selector: 'page-createrecording',
  templateUrl: 'createrecording.html',
})
export class CreaterecordingPage {

  public MediaPlugin: MediaPlugin;
  
    public totalrecords = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public sharedprovider:SharedProvider, public recordingprovider: CustomTrackProvider) {
    this.totalrecords = this.recordingprovider.totalrecords;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreaterecordingPage');
  }


  startRecording() {
    let name: string = "recording" + this.totalrecords;
    this.MediaPlugin = new MediaPlugin(name + ".wav");
    this.MediaPlugin.startRecord();
  }

  stopRecording() {
    this.MediaPlugin.stopRecord();
  }

  playRecording() {
    this.MediaPlugin.play();
  }


  gotofeatures() {
    if (this.MediaPlugin != null) {
      this.MediaPlugin.stopRecord();
      let name: string = "recording" + this.totalrecords;
      this.recordingprovider.recordingNames2.push(name);
      this.navCtrl.push(FeaturesPage);
    }
  }

  producesound(){
    this.sharedprovider.producesound("Press the microphone button to record and press the stop button when you're done. You can hear your recording by pressing the play button")
  }






}
