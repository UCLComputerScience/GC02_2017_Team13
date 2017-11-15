import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // tabBarElement: any;
  // splash = true;

  constructor(public navCtrl: NavController,private tts:TextToSpeech) {
    // this.tabBarElement = document.querySelector('.tabbar');
  }

  async producesound():Promise<any>{

    try{
      await this.tts.speak("this is the dashboard");
      console.log("succesfully spoke");

    }
    catch(e){
      console.log(e);

    }
  }







  // ionViewDidLoad() {
  //   this.tabBarElement.style.display = 'none';
  //   setTimeout(() => {
  //     this.splash = false;
  //     this.tabBarElement.style.display = 'flex';
  //   }, 3000);
  // }


}
