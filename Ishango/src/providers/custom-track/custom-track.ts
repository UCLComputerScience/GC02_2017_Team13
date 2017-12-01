import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MediaPlugin } from 'ionic-native';
 
@Injectable()export class CustomTrackProvider {

 public runningCosts=[];
 public recordingNames=[];
 public totalrecordings=0;
 public MediaPlugin: MediaPlugin;
 public index;
 
 constructor(public http: Http) {
   console.log('Hello CustomTrack Provider');
 
 }
 playRecording(id) {
    this.MediaPlugin = new MediaPlugin(this.recordingNames[id]+".wav");
    this.MediaPlugin.play();
}

stopRecordingPlay() {
    this.MediaPlugin.stop();
  }

  delete(id){
    this.runningCosts.splice(id,1);
    this.recordingNames.splice(id,1);
  }

  acceptaddition(moneypaid){
    this.runningCosts.push(moneypaid);
  }
 
}




















