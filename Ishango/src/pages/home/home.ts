import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedProvider } from '../../providers/sharedprovider/sharedprovider';
import { DebtperproductPage } from '../../pages/debt/debtperproduct/debtperproduct';
import { CreditperproductPage } from '../../pages/credit/creditperproduct/creditperproduct';
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
  public creditYes;
  public positive;
  public positiveStock;

  constructor(public navCtrl: NavController, private sharedprovider: SharedProvider, public menuCtrl: MenuController) {
  }



  producesound () {
    console.log(this.sharedprovider.cash);
    this.sharedprovider.producesound("this is the dashboard");
  }


  debtperproduct(){

    // user cannot go to debt if debt = 0;
    var sum = 0;

    for(var i = 0; i < this.sharedprovider.debt.length; i++){
      sum += this.sharedprovider.debt[i];
    }

    if(sum > 0)
      this.navCtrl.push(DebtperproductPage);
    else
      return;
  }

  creditperproduct(){

    // user cannot go to debt if debt = 0;
    var sum = 0;

    for(var i = 0; i < this.sharedprovider.credit.length; i++){
      sum += this.sharedprovider.credit[i];
    }
    console.log("sum: " + sum);

    if(sum > 0)
      this.navCtrl.push(CreditperproductPage);
    else
      return;
  }

  ionViewDidEnter(){
    this.cash = this.sharedprovider.cash;
    this.debtYes = this.sharedprovider.debtYes;
    this.creditYes = this.sharedprovider.creditYes;
    var num = 0;
    var temp = 0;
    for (num = 0; num < this.sharedprovider.debt.length; num++) {
      temp = temp + this.sharedprovider.debt[num];
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

