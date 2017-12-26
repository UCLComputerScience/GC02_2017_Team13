import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedProvider } from '../../providers/sharedprovider/sharedprovider';
import { DebtperproductPage } from '../../pages/debt/debtperproduct/debtperproduct';
import { WelcomePage } from '../../pages/initialRegistration/welcome/welcome';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})

export class HomePage {
  // tabBarElement: any;
  // splash = true;
  public cash;
  public totaldebt = 0;
  public debtYes;
  public positive;
  public positiveStock;



  public emojy;

  constructor(public navCtrl: NavController, private sharedprovider: SharedProvider, public menuCtrl: MenuController) {
    this.cash = this.sharedprovider.cash;
  }



  producesound () {
    console.log(this.sharedprovider.cash);
       this.sharedprovider.producesound("this is the dashboard");
  }
  debtperproduct(){
    this.navCtrl.push(DebtperproductPage);
  }
  gotoregistration(){
    this.navCtrl.push(WelcomePage);
  }
  ionViewDidEnter(){
    this.cash=this.sharedprovider.cash;
    this.debtYes = this.sharedprovider.debtYes;
    var num: number = 0;
    var temp: number = 0;
    for (num = 0; num < this.sharedprovider.debt.length; num++) {
      temp=temp+this.sharedprovider.debt[num];
    }
    this.totaldebt = temp;

    if(this.cash - this.totaldebt >= 0){
      this.positive = true;
    } else {
      this.positive = false;
    }

    for(var i = 0; i <= this.sharedprovider.quantity.length; i++){
      
      if(this.sharedprovider.quantity[i] == 0 || this.sharedprovider.quantity.length == 0){
        this.positiveStock = false;
        break;
      } 
      else {
        this.positiveStock = true;
      }
    }

}
 }

