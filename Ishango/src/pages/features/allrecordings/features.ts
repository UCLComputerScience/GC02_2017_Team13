import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { CreaterecordingPage } from '../../../pages/features/createrecording/createrecording';



@IonicPage()
@Component({
  selector: 'page-features',
  templateUrl: 'features.html',
})
export class FeaturesPage {



  constructor(public navCtrl: NavController,public sharedprovider:SharedProvider, public navParams: NavParams) {
  }

















  gotocreaterecording(){
    this.navCtrl.push(CreaterecordingPage);
  }


  producesound(presets){
    if (presets==1)
    {
      this.sharedprovider.producesound("In this page, you can create custom recording");
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturesPage');
  }
}
