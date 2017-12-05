import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneypaidPage } from '../moneypaid/moneypaid';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';

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

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams) {
  }



  increment(amount) {
    this.quantity= this.quantity + amount;
  }

  reduce(amount) {
    if (this.quantity-amount>=0){
    this.quantity = this.quantity - amount;}
    else{
      this.quantity = 0;
    }
  }
  
    


  gotomoneypaidpage() {
    if (this.quantity > 0){
    this.sharedprovider.quantityTemp.push(this.quantity);
    this.navCtrl.push(MoneypaidPage);
    }
  }

  producesound (preset) {
    if(preset==1)
    {
      this.sharedprovider.producesound("Enter how many items you are bying");
    }
    else if (preset==2)
    {
      this.sharedprovider.producesound("Enter how many items you are bying");
    }
     
  }

}
