import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { RecordPage } from '../../../pages/runningcosts_folder/record/record';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import {DeleterunningcostPage} from '../../../pages/runningcosts_folder/deleterunningcost/deleterunningcost';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-runningcosts',
  templateUrl: 'runningcosts.html',
})
export class RunningcostsPage {

  public runningCosts=[];
  private background;
  
  constructor(public storage:Storage,public recordingprovider: CustomTrackProvider,public sharedprovider:SharedProvider, public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

  }

  ionViewDidEnter(){

    this.runningCosts = this.recordingprovider.runningCosts;

    console.log("runningCosts length: " + this.runningCosts.length);
    
    if(this.runningCosts.length > 0) {
      this.background = false;
    } else {
      this.background = true;
    }
  }

  playrecording(id)
  {
    this.recordingprovider.playRecording(id);
  }

  gotodeleterunningcost(id){
    this.recordingprovider.index = id;
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