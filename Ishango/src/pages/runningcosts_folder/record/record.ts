import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController, NavParams } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { FileChooser } from 'ionic-native';
import { FilePath } from 'ionic-native';
import { File } from '@ionic-native/file';
import { RunningcostsPage } from '../../../pages/runningcosts_folder/runningcosts/runningcosts';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';


@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
  providers: [File]
})
export class RecordPage {

  public MediaPlugin: MediaPlugin;

  public totalrecordings = 0;

  constructor(public navCtrl: NavController, public recordingprovider: CustomTrackProvider, public alertCtrl: AlertController, private file: File) {
    this.totalrecordings = this.recordingprovider.totalrecordings;

  }

  startRecording() {
    let name: string = "recording" + this.totalrecordings;
    this.MediaPlugin = new MediaPlugin(name + ".mp3");
    this.MediaPlugin.startRecord();
  }

  stopRecording() {
    this.MediaPlugin.stopRecord();
  }

  playRecording() {
    this.MediaPlugin.play();
  }


  gotorunningcost() {
    if (this.MediaPlugin != null) {
      this.MediaPlugin.stopRecord();
      let name: string = "recording" + this.totalrecordings;
      this.recordingprovider.recordingNames.push(name);
      this.recordingprovider.runningCosts.push("20");
      this.navCtrl.setRoot(RunningcostsPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioRecorderPage');
  }



  /*get MediaPlugin(): MediaPlugin {
  if (this.mediaPlugin == null) {
    //let filepath = this.file.externalDataDirectory + "my_audio.mp3";
    this.mediaPlugin = new MediaPlugin("gamao.wav");
  }
 
  return this.mediaPlugin;
}*/

}

