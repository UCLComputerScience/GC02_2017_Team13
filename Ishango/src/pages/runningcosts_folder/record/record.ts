import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController, NavParams } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { FileChooser } from 'ionic-native';
import { FilePath } from 'ionic-native';
import { File } from '@ionic-native/file';
import { RunningcostsPage } from '../../../pages/runningcosts_folder/runningcosts/runningcosts';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import {AmountpaidPage} from '../../../pages/runningcosts_folder/amountpaid/amountpaid';


@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  public MediaPlugin: MediaPlugin;

  public totalrecordings = 0;
  clicked;
  playing;
  stop;

  constructor(public navCtrl: NavController,public sharedprovider:SharedProvider, public recordingprovider: CustomTrackProvider, public alertCtrl: AlertController) {
    this.totalrecordings = this.recordingprovider.totalrecordings;

  }

  startRecording() {
    let name: string = "runningcost" + this.totalrecordings;
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
    this.MediaPlugin.stopRecord();
    this.MediaPlugin.play();
    this.playing = true;
    this.clicked = false;
    this.stop = false;
  }

  gotomoneypaid() {
    if (this.MediaPlugin != null) {
      this.MediaPlugin.stopRecord();
      let name: string = "runningcost" + this.totalrecordings;
      this.recordingprovider.recordingNames.unshift(name);
      this.navCtrl.push(AmountpaidPage);
    }
  }

  producesound(){
    this.sharedprovider.producesound("Press the microphone button to record your running cost and press the stop button when you're done. You can hear your recording by pressing the play button")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioRecorderPage');
    this.clicked = false;
    this.playing = false;
    this.stop = false;
  }


}

