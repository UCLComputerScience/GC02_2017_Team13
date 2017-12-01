import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MediaPlugin } from 'ionic-native';
import { SharedProvider } from '../../providers/sharedprovider/sharedprovider';
 
@Injectable()export class CustomTrackProvider {

  //values for recording
  public indexrec;
  public recordingNames2=[];
  public MediaPlugin2: MediaPlugin;
  public totalrecords=0;



//values for runningcosts
 public runningCosts=[];
 public recordingNames=[];
 public totalrecordings=0;
 public MediaPlugin: MediaPlugin;
 public index;//this values is used to delete 
 
 constructor(public http: Http,public sharedprovider:SharedProvider) {
   console.log('Hello CustomTrack Provider');
 
 }
 playRecording(id) {
    this.MediaPlugin = new MediaPlugin(this.recordingNames[id]+".mp3");
    this.MediaPlugin.play();
}

  delete(){
    this.runningCosts.splice(this.index,1);
    this.recordingNames.splice(this.index,1);
  }

  acceptaddition(moneypaid){
    this.runningCosts.push(moneypaid);
    this.sharedprovider.cash=this.sharedprovider.cash-moneypaid;
  }


  //functions for recording

  deleterec(){
    this.recordingNames2.splice(this.indexrec,1);
  }

  playRecord(id){
    this.MediaPlugin = new MediaPlugin(this.recordingNames2[id]+".mp3");
    this.MediaPlugin2.play();
  }



 
}




















