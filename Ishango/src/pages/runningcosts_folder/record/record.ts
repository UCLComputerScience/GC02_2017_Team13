import { Component } from '@angular/core';
import { IonicPage, NavController,Platform, AlertController, NavParams } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import {FileChooser} from 'ionic-native';
import {FilePath} from 'ionic-native';
import { File } from '@ionic-native/file';
import { RunningcostsPage } from '../../../pages/runningcosts_folder/runningcosts/runningcosts';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';


@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
  providers: [ File]
})
export class RecordPage {

  public MediaPlugin: MediaPlugin;
  public MediaPlugin2: MediaPlugin;
  public MediaPlugin3: MediaPlugin;
  public MediaPlugin4: MediaPlugin;
  recorded: boolean;

  public totalrecording;

  constructor(public navCtrl: NavController,public provider:CustomTrackProvider,public alertCtrl: AlertController,private file: File) {
    this.totalrecording=this.provider.totalrecording;
    
  }

  


  /*get MediaPlugin(): MediaPlugin {
    if (this.mediaPlugin == null) {
      //let filepath = this.file.externalDataDirectory + "my_audio.mp3";
      this.mediaPlugin = new MediaPlugin("gamao.wav");
    }
  
    return this.mediaPlugin;
  }*/

  
  startRecording() {
        let name: string = "recording"+this.totalrecording;
        this.MediaPlugin = new MediaPlugin(name+".mp3");     
        this.MediaPlugin.startRecord();

  }
  
  stopRecording() { 
      this.MediaPlugin.stopRecord();
      this.recorded = true;
  }
  

  gotorunningcost(){
    this.provider.runningCosts.push("skata");
    this.provider.totalrecording=this.provider.totalrecording+1;
    this.navCtrl.setRoot(RunningcostsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioRecorderPage');
  }


  
}
