import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { MediaPlugin } from 'ionic-native';
import { AllrecordingsPage } from '../../../pages/features/allrecordings/allrecordings';

@IonicPage()
@Component({
  selector: 'page-createrecording',
  templateUrl: 'createrecording.html',
})
export class CreaterecordingPage {

  public MediaPlugin: MediaPlugin;
  
    public totalrecords = 0;
    clicked;
  playing;
  stop;

  constructor(public navCtrl: NavController, public navParams: NavParams,public sharedprovider:SharedProvider, public recordingprovider: CustomTrackProvider) {
    this.totalrecords = this.recordingprovider.totalrecords;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreaterecordingPage');
    this.clicked = false;
    this.playing = false;
    this.stop = false;
  }


  startRecording() {
    let name: string = "recording # " + this.totalrecords;
    this.MediaPlugin = new MediaPlugin(name + ".wav");
    this.MediaPlugin.startRecord();
     this.clicked = true;
    this.playing = false;
    this.stop = false;
  }

  stopRecording() {
    this.MediaPlugin.stopRecord();
    this.clicked = false;
    this.playing = false;
    this.stop = true;
  }

  playRecording() {
    this.MediaPlugin.play();
    this.playing = true;
    this.clicked = false;
    this.stop = false;
  }


  gotofeatures() {
    if (this.MediaPlugin != null) {
      this.MediaPlugin.stopRecord();
      let name: string = "recording # " + this.totalrecords;
      this.recordingprovider.recordingNames2.push(name);
      this.recordingprovider.updateDataBase();
      this.navCtrl.setRoot(AllrecordingsPage);
    }
  }

  producesound(){
    this.sharedprovider.producesound("Press the rec button to record your message. Then, press the stop button when you're done. You can hear your recording by pressing the play button");
  }






}
