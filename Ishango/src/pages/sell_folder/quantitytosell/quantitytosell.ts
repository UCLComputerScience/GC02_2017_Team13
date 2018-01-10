import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneyreceivedPage } from '../moneyreceived/moneyreceived';
import { AlertController } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@IonicPage()
@Component({
  selector: 'page-quantitytosell',
  templateUrl: 'quantitytosell.html',
})
export class QuantitytosellPage {
  public quantity = 0;

  constructor(public sharedprovider: SharedProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {


  }
  //function executed when voice feedback is needed
  producesound(preset) {
    if (preset == 1) {
      this.sharedprovider.producesound("Enter how many items you are selling");
    }
    else if (preset == 2) {
      this.sharedprovider.producesound("You don't have more items to sell");
    }

  }

  //if quantity to sell if bigger than quantity bought, do not allow sale + Vocal message saying no more items.
  increment(amount) {
    if (this.quantity + amount <= this.sharedprovider.quantity[this.sharedprovider.index]) {
      this.quantity = this.quantity + amount;
    } else {
      // push quantity to sell to maximum allowed when the actual quantity in stock is surpassed
      this.quantity = this.sharedprovider.quantity[this.sharedprovider.index];
      this.producesound(2);
    }
  }

  //reduce the displayed amount
  reduce(amount) {
    if (this.quantity - amount >= 0) {
      this.quantity = this.quantity - amount;
    } else {
      this.quantity = 0;
    }
  }
  //go to the next screen where the user enter the amount of money agreed for this purchase
  gotomoneyreceived() {
    if (this.quantity > 0) {
      this.sharedprovider.quantityTempSell.push(this.quantity);
      this.navCtrl.push(MoneyreceivedPage);
    }
  }

}
