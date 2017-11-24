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

  constructor(public navCtrl: NavController, private sharedprovider: SharedProvider) {
    // this.tabBarElement = document.querySelector('.tabbar');
    this.cash=this.sharedprovider.cash;
    var num: number = 0;
    for (num = 0; num < this.sharedprovider.debt.length; num++) {
      this.totaldebt=this.totaldebt+this.sharedprovider.debt[num];
    }
  }

  producesound () {
       this.sharedprovider.producesound("this is the dashboard");
  }
  debtperproduct(){
    this.navCtrl.push(DebtperproductPage);
  }
  gotoregistration(){
    this.navCtrl.push(WelcomePage);
  }

  // ionViewDidLoad() {
  //   this.tabBarElement.style.display = 'none';
  //   setTimeout(() => {
  //     this.splash = false;
  //     this.tabBarElement.style.display = 'flex';
  //   }, 3000);
  // }


}
