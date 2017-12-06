import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedProvider } from '../../providers/sharedprovider/sharedprovider';
import { DebtperproductPage } from '../../pages/debt/debtperproduct/debtperproduct';
import { WelcomePage } from '../../pages/initialRegistration/welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // tabBarElement: any;
  // splash = true;
  public cash;
  public totaldebt=0;

  public emojy;

  constructor(public navCtrl: NavController, private sharedprovider: SharedProvider) {
    this.cash=this.sharedprovider.cash;
    // this.tabBarElement = document.querySelector('.tabbar');
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
    var num: number = 0;
    var temp: number = 0;
    for (num = 0; num < this.sharedprovider.debt.length; num++) {
      temp=temp+this.sharedprovider.debt[num];
    }
    this.totaldebt=temp;
  }

  

  // ionViewDidLoad() {
  //   this.tabBarElement.style.display = 'none';
  //   setTimeout(() => {
  //     this.splash = false;
  //     this.tabBarElement.style.display = 'flex';
  //   }, 3000);
  // }


}
