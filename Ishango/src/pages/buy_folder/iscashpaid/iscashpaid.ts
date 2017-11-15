import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductstobuyPage } from '../productstobuy/productstobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { TextToSpeech } from '@ionic-native/text-to-speech';



@IonicPage()
@Component({
  selector: 'page-iscashpaid',
  templateUrl: 'iscashpaid.html',
})
export class IscashpaidPage {
 

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams,private tts: TextToSpeech ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IscashpaidPage');
  }

  cashpaid() {
    this.sharedprovider.acceptaddition();

    this.navCtrl.setRoot(ProductstobuyPage);
    
    

    
  }
  cashnotpaid() {
    this.sharedprovider.acceptaddition();

    this.navCtrl.setRoot(ProductstobuyPage);
 
  }

  async producesound(): Promise<any> {
    try {
      await this.tts.speak("If you paid for the items click the blue button. If you paid by credit, click the red button");
      console.log("succesfully spoke");
    }
    catch (e) {
      console.log(e);

    }
  }




}
