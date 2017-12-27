import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';


/**
 * Generated class for the SalesarchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salesarchive',
  templateUrl: 'salesarchive.html',
})
export class SalesarchivePage {

   private photos = [];
   private quantity = [];
   private moneyreceived = [];
   private photosSell = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedprovider: SharedProvider) {

  }

//allow sales only if at least one product has been bought
  gotodeletesale(id) {
    
  }

 

  producesound (preset) {
    if(preset==1)
    {
      this.sharedprovider.producesound("This screen shows your sales");
    }
    else if (preset==2)
    {
      this.sharedprovider.producesound("this column shows a photo of your sold product");
    }
    else if (preset==3)
    {
      this.sharedprovider.producesound("this column shows the quantity of your sold product");
    }
     
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesarchivePage');
  }

}
