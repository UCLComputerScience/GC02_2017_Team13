import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { RecordPage } from '../../../pages/runningcosts_folder/record/record';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import {FileChooser} from 'ionic-native';
import {FilePath} from 'ionic-native';
import {DeleterunningcostPage} from '../../../pages/runningcosts_folder/deleterunningcost/deleterunningcost';


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
  
  constructor(public recordingprovider: CustomTrackProvider,public sharedprovider:SharedProvider, public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.runningCosts=this.recordingprovider.runningCosts;
  }

  playrecording(id)
  {
    this.recordingprovider.playRecording(id);
  }


  gotodeleterunningcost(id){
    this.recordingprovider.index=id;
    this.navCtrl.push(DeleterunningcostPage);
  }

  producesound(presets){
    if (presets==1)
    {
      this.sharedprovider.producesound("This page shows your running costs. For each running cost you can enter how much money you paid");
    }
    else if (presets==2)
    {
      this.sharedprovider.producesound("In this column you can see all of your running costs. Click on any icon to hear what it is");      
    }
    else if (presets==3)
    {
     this.sharedprovider.producesound("In this column you can see the money you paid for each running cost"); 
    }
    
  }

  gotorecord(){
    this.recordingprovider.totalrecordings=this.recordingprovider.totalrecordings+1;
    this.navCtrl.push(RecordPage);
  }

 }