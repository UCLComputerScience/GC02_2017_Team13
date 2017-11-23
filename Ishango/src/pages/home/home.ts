import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedProvider } from '../../providers/sharedprovider/sharedprovider';
import { DebtperproductPage } from '../../pages/debt/debtperproduct/debtperproduct';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // tabBarElement: any;
  // splash = true;

  constructor(public navCtrl: NavController, private sharedprovider: SharedProvider) {
    // this.tabBarElement = document.querySelector('.tabbar');
  }

  producesound () {
       this.sharedprovider.producesound("this is the dashboard");
  }
  debtperproduct(){
    this.navCtrl.push(DebtperproductPage);
  }

  // ionViewDidLoad() {
  //   this.tabBarElement.style.display = 'none';
  //   setTimeout(() => {
  //     this.splash = false;
  //     this.tabBarElement.style.display = 'flex';
  //   }, 3000);
  // }


}
