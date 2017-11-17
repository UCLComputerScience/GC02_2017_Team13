import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyreceivedPage } from '../moneyreceived/moneyreceived';
import { AlertController } from 'ionic-angular';
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
  selector: 'page-quantitytosell',
  templateUrl: 'quantitytosell.html',
})
export class QuantitytosellPage {
  public quantity = 0;
  public speed = 0;

  constructor(public sharedprovider: SharedProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private tts:TextToSpeech) {
        

  }

  producesound() {
    this.sharedprovider.producesound("You don't have more items");
  }

  increment(amount) {
    if(this.quantity + amount <= this.sharedprovider.quantity[this.sharedprovider.index]){
    this.quantity= this.quantity + amount;
    } else {
       this.quantity = this.sharedprovider.quantity[this.sharedprovider.index];
       this.producesound();
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
