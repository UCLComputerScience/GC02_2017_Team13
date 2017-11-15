import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotobuyPage } from '../photobuy/photobuy';
import { QuantitytobuyPage } from '../quantitytobuy/quantitytobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the AddneworexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addneworex',
  templateUrl: 'addneworex.html',
})
export class AddneworexPage {
  private photos = [];
  private quantity = [];
  private moneypaid = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider,private tts:TextToSpeech) {

    this.photos=this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
    this.moneypaid = this.sharedprovider.moneypaid;
  }

  gotophotobuy() {
    this.navCtrl.push(PhotobuyPage);
  }
  buymoreofthesame(index){
    this.sharedprovider.buysameitem=true;
    this.sharedprovider.index=index;
    this.navCtrl.push(QuantitytobuyPage);
    

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddneworexPage');
  }


}
