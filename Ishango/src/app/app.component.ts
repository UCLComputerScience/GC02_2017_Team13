import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { TabsPage } from '../pages/tabs/tabs';
import { RegistrationPage } from '../pages/initialRegistration/registration/registration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  loader: any;

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen, private device: Device, public loadingCtrl: LoadingController, public storage: Storage) {

    this.presentLoading();
    
        this.platform.ready().then(() => {
    
          this.storage.get('introShown').then((result) => {
    
            if(result){
              this.rootPage = TabsPage;
            } else {
              this.rootPage = RegistrationPage;
              this.storage.set('introShown', true);
            }
    
            this.loader.dismiss();
            
          });
    
        });
    
      }
    
      presentLoading() {
    
        this.loader = this.loadingCtrl.create({
          content: "Authenticating..."
        });
    
    this.loader.present();
  }
}
