import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MediaPlugin } from 'ionic-native';
 
@Injectable()export class CustomTrackProvider {

 public runningCosts=[];
 public totalrecording=0;
 public MediaPlugin: MediaPlugin;
 
 constructor(public http: Http) {
   console.log('Hello CustomTrack Provider');
 
 }
 playRecording(id) {
    this.MediaPlugin = new MediaPlugin("recording"+id+".mp3");
    this.MediaPlugin.play();
}

stopRecordingPlay() {
    this.MediaPlugin.stop();
  }
 
}




















