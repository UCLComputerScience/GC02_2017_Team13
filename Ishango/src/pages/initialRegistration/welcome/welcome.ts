import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CashregisterPage } from '../../../pages/initialRegistration/cashregister/cashregister';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { WelcomepicturePage } from '../../../pages/initialRegistration/welcomepicture/welcomepicture';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider, private camera: Camera, public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  //array with photos
   public photoProfile;
   public base64Image: any;


takephotoprofile() {
    const options: CameraOptions = {
  quality: 40,
  allowEdit: true,
  correctOrientation: true, 
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
  this.base64Image = 'data:image/jpeg;base64,' + imageData;
  this.photoProfile = this.base64Image;

}, (err) => {
 // Handle error
});
this.sharedprovider.photoProfile = this.photoProfile;
this.navCtrl.push(WelcomepicturePage);
}





}
