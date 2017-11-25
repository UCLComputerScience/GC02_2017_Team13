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
  myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;
  loaded: boolean;//to check if the custom song is loaded properly or not
  filePath: any;
  File: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');
    
     if (this.customTrack.customSource == null) {
          this.loaded = false;
     }
    
     else {
         this.loaded = true;
     }
  }
   // http://stackoverflow.com/questions/35352284/replacing-characters-within-a-string-in-angularjs
 tools_replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
openFile() {
  this.platform.ready().then(() => {
      let file: any;
      FileChooser.open()
      .then((uri) => {
          console.log(uri);
          file = uri;
          this.File = file;
          console.log("OpenFile path: " + this.File);
          
          FilePath.resolveNativePath(uri)
          .then((filePath) => {
              console.log("Second Path: "+ filePath);
              this.filePath = filePath;
              
              //this.filePath = this.tools_replaceAll(this.filePath, "%3A416" , ".mp3" ) ;
              
              this.saveTrackSource(this.filePath);
          })
          .catch((err) => {
              console.log(err);
             });
          
      }).catch((e) => console.log(e));
  });
}

constructor(public customTrack: CustomTrackProvider, public navCtrl: NavController, public navParams: NavParams, private audioProvider: AudioProvider, public platform: Platform) {
  
    
     this.filePath = "";
     this.File = this.filePath;
    
    this.myTracks = [{
      src: 'http://www.noiseaddicts.com/samples_1w72b820/4207.mp3',
      artist: 'Katatonia',
      title: "Soil's Song",
      art: 'https://images-na.ssl-images-amazon.com/images/I/51%2BVlDDzumL.jpg',
      preload: 'metadata'
    },
    {
      src: 'http://www.noiseaddicts.com/samples_1w72b820/4207.mp3',
      title: 'India National Anthem',
      art: 'http://www.flagsinformation.com/indian-flag.png',
      preload: 'metadata'
    }];
    
    this.singleTrack = {//This is done to demonstrate that you can either add several tracks within an array or you only one track.
      src: 'http://www.noiseaddicts.com/samples_1w72b820/4207.mp3',
      title: 'Israel National Anthem',
      art: 'http://www.crwflags.com/fotw/images/i/il.gif',
      preload: 'metadata'
    };
    
  }

  saveTrackSource(source) {
    this.customTrack.customSource = source;
    console.log(this.customTrack.customSource);
    
    this.loaded = true;
    
    if (this.customTrack.customSource == null) {
        this.loaded = false;
    }
    
    this.customTrack.customTrack.src = this.customTrack.customSource;
    this.pauseSelectedTrack();
    
    // Let's reload the view
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
}

ngAfterContentInit() {     
  this.allTracks = this.audioProvider.tracks;
}

playSelectedTrack() {
  this.audioProvider.play(this.selectedTrack);
}

pauseSelectedTrack() {
   this.audioProvider.pause(this.selectedTrack);
}

onTrackFinished(track: any) {
  console.log('Track finished', track)
}

  gotorecord(){
    this.navCtrl.push(RecordPage);
  }



}
