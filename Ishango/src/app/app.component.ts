import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/initialRegistration/welcome/welcome';
import { SharedProvider } from '../providers/sharedprovider/sharedprovider';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  loader: any;

  public photoProfile;
  public base64Image: any;

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen, private device: Device, public loadingCtrl: LoadingController, public storage: Storage, private camera: Camera, public sharedprovider: SharedProvider) {

    this.photoProfile = this.sharedprovider.photoProfile;

    this.presentLoading();
    
        this.platform.ready().then(() => {
    
          this.storage.get('introShown').then((result) => {
      // this.storage.set('introShown', false);
            if(result){
              this.rootPage = TabsPage;
            } else {
              this.rootPage = WelcomePage;
              this.storage.set('introShown', true);
            }
    
            this.loader.dismiss();
            
          });
    
        });
      }
    
      presentLoading() {
    
        this.loader = this.loadingCtrl.create({
          content: "Loading..."
        });
    
    this.loader.present();
  }


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
}




}
