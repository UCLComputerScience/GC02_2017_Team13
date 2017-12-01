import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { RecordPage } from '../../../pages/runningcosts_folder/record/record';
import { AudioProvider } from 'ionic-audio/dist';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import {FileChooser} from 'ionic-native';
import {FilePath} from 'ionic-native';


@IonicPage()
@Component({
  selector: 'page-runningcosts',
  templateUrl: 'runningcosts.html',
})
export class RunningcostsPage {

  public runningCosts=[];
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');
  }
  
  constructor(public customTrack: CustomTrackProvider, public navCtrl: NavController, public navParams: NavParams, private audioProvider: AudioProvider, public platform: Platform) {
    this.runningCosts=this.customTrack.runningCosts;
  }

  playrecording(id)
  {
    this.customTrack.playRecording(id);
  }

  gotorecord(){
    this.navCtrl.push(RecordPage);
  }

 }