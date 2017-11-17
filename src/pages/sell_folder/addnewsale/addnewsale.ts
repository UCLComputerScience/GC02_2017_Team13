import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuantitytosellPage } from '../quantitytosell/quantitytosell';
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
  selector: 'page-addnewsale',
  templateUrl: 'addnewsale.html',
})
export class AddnewsalePage {
  private photos = [];
  private quantity = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider,private tts:TextToSpeech) {

    this.photos=this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
  }

  gotoquantitytosell(index) {
    this.sharedprovider.buysameitem=true;
    this.sharedprovider.index=index;
    this.navCtrl.push(QuantitytosellPage);
    // console.log(index);
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
