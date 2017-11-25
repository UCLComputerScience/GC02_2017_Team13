import { Component } from '@angular/core';
import { IonicPage, NavController,Platform, AlertController, NavParams } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';


@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {
  mediaPlugin: MediaPlugin = null;
  recorded: boolean;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public platform: Platform) {
    this.recorded = false;
  }


  get MediaPlugin(): MediaPlugin {
    if (this.mediaPlugin == null) {
      this.mediaPlugin = new MediaPlugin('recording.wav');
    }
  
    return this.mediaPlugin;
  }
  
  startRecording() {
    try {
         this.MediaPlugin.startRecord();
    }
    catch (e) {
      this.showAlert('Error: '+ e);
    }
  }
  
  stopRecording() {
    try {     
      this.MediaPlugin.stopRecord();
      this.recorded = true;
    }
    catch (e) {
      this.showAlert('Error: '+ e);
    }
  }
  
  playRecording() {
    try {
      this.MediaPlugin.play();
    }
    catch (e) {
      this.showAlert('Error: '+ e);
    }
  }
  
  stopRecordingPlay() {
    try {
      this.MediaPlugin.stop();
    }
    catch (e) {
      this.showAlert('Error: '+ e);
    }
  }
  
  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioRecorderPage');
  }


  
}
