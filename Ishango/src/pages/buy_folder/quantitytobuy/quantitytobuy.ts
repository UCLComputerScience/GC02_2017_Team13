import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoneypaidPage } from '../moneypaid/moneypaid';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';


@IonicPage()
@Component({
  selector: 'page-quantitytobuy',
  templateUrl: 'quantitytobuy.html',
})
export class QuantitytobuyPage {
   public quantity = 0;

   ionViewCanEnter(){
     
   }

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
