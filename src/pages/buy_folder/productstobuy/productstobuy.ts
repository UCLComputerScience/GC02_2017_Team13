import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotobuyPage } from '../photobuy/photobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { AddneworexPage } from '../addneworex/addneworex';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DeleteitemPage } from '../../../pages/buy_folder/deleteitem/deleteitem';

@Component({
  selector: 'page-productstobuy',
  templateUrl: 'productstobuy.html'
})
export class ProductstobuyPage {
  private photos=[];
   private quantity=[];
   private moneypaid=[];


  constructor(public navCtrl: NavController, public sharedprovider: SharedProvider,private tts:TextToSpeech) {
    this.photos = this.sharedprovider.photos;
    this.quantity = this.sharedprovider.quantity;
    this.moneypaid = this.sharedprovider.moneypaid;

  }



  gotoneworexisting() {
    this.navCtrl.push(AddneworexPage);
  }
  gotodeleteitem(id){
    this.sharedprovider.index=id;
    this.navCtrl.push(DeleteitemPage);

  }

  async producesound(): Promise<any> {
    try {
      await this.tts.speak("In this screen appear all the products you have bought");
      console.log("succesfully spoke");
    }
    catch (e) {
      console.log(e);

    }
  }



}
