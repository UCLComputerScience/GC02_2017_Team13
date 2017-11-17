import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneypaidPage } from '../moneypaid/moneypaid';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the QuantityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quantitytobuy',
  templateUrl: 'quantitytobuy.html',
})
export class QuantitytobuyPage {
  public quantity = 0;

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams, private device: Device, private tts:TextToSpeech ) {
  }

  increment(amount) {
    this.quantity= this.quantity + amount;
  }

  reduce(amount) {
    if (this.quantity-amount>=0){
    this.quantity = this.quantity - amount;}
  }

  gotoiscashpaid() {
    if (this.quantity>0){
    this.sharedprovider.quantityTemp.push(this.quantity);
    this.navCtrl.push(MoneypaidPage);}
  }

  async producesound(): Promise<any> {
    try {
      await this.tts.speak("Enter how many items you bought");
      console.log("succesfully spoke");
    }
    catch (e) {
      console.log(e);

    }
  }

}
