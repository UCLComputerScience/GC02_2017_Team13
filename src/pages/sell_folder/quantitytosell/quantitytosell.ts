import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyreceivedPage } from '../moneyreceived/moneyreceived';
import { AlertController } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Device } from '@ionic-native/device';



/**
 * Generated class for the QuantityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quantitytosell',
  templateUrl: 'quantitytosell.html',
})
export class QuantitytosellPage {
  public quantity = 0;
  public speed = 0;

  constructor(public sharedprovider: SharedProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private tts:TextToSpeech, private device: Device ) {
          this.sharedprovider.speedvoice;
          this.speed = this.sharedprovider.speed;

  }


  async producesound(): Promise<any> {
    try {
      await this.tts.speak("in this page you can add a purchase of a new product or of a product that you had already bought");
      console.log("succesfully spoke");
    }
    catch (e) {
      console.log(e);

    }
  }

  async producesound2(): Promise<any> {
    try {

         if(this.device.platform.toString() == "iOS")
            this.speed = 1.5;

         await this.tts.speak({ text: "You don't have more items",  rate: this.speed})

      console.log("succesfully spoke");
    }
    catch (e) {
      console.log(e);

    }
  }


  increment(amount) {
     console.log(this.device.platform);
                  console.log(this.device.version.charAt(0));
    if(this.quantity + amount <= this.sharedprovider.quantity[this.sharedprovider.index]){
    this.quantity= this.quantity + amount;
    } else {
       this.producesound2();
    }
  }

  reduce(amount) {
    if (this.quantity-amount >= 0){
    this.quantity = this.quantity - amount;
    }
  }



  


  gotoiscashreceived() {
    if (this.quantity>0){
      this.sharedprovider.quantityTemp.push(this.quantity);
      this.navCtrl.push(MoneyreceivedPage);
    }
  }

}
