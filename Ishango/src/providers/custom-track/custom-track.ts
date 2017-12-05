import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MediaPlugin } from 'ionic-native';
import { SharedProvider } from '../../providers/sharedprovider/sharedprovider';
import { Storage } from '@ionic/storage';
 
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
 
 constructor(public http: Http,public sharedprovider:SharedProvider,public storage:Storage) {
   
  this.getValuesFromDB();
 
 }
 playRecording(id) {
    this.MediaPlugin = new MediaPlugin(this.recordingNames[id]+".wav");
    this.MediaPlugin.play();
}

  delete(){
    this.runningCosts.splice(this.index,1);
    this.recordingNames.splice(this.index,1);
    this.updateDataBase();
  }

  acceptaddition(moneypaid){
    this.runningCosts.push(moneypaid);
    this.sharedprovider.cash=this.sharedprovider.cash-moneypaid;
    this.updateDataBase();
  }


  //functions for recording

  deleterec(){
    this.recordingNames2.splice(this.indexrec,1);
    this.updateDataBase();
  }

  playRecord(id){
    this.MediaPlugin2 = new MediaPlugin(this.recordingNames2[id]+".wav");
    this.MediaPlugin2.play();
  }

  updateDataBase(){
    this.storage.set('recordingNames2', this.recordingNames2);
    this.storage.set('totalrecords', this.totalrecords);
    this.storage.set('runningCosts', this.runningCosts);

    this.storage.set('recordingNames', this.recordingNames);
    this.storage.set('totalrecordings', this.totalrecordings);

  }

  getValuesFromDB(){
    this.storage.get('recordingNames2').then((data) => {
      if(data!=null)
      {
        this.recordingNames2 = data;
      }
    });
    this.storage.get('totalrecords').then((data) => {
      if(data!=null)
      {
        this.totalrecords = data;
      }
    });

    //now the running costs values
    this.storage.get('runningCosts').then((data) => {
      if(data!=null)
      {
        this.runningCosts = data;
      }
    });

    this.storage.get('recordingNames').then((data) => {
      if(data!=null)
      {
        this.recordingNames = data;
      }
    });

    this.storage.get('totalrecordings').then((data) => {
      if(data!=null)
      {
        this.totalrecordings = data;
      }
    });



  }



 
}




















