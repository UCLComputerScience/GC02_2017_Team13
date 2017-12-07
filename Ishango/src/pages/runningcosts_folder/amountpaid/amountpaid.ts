import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { RunningcostsPage } from '../../../pages/runningcosts_folder/runningcosts/runningcosts';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';


@IonicPage()
@Component({
  selector: 'page-amountpaid',
  templateUrl: 'amountpaid.html',
})
export class AmountpaidPage {
  moneypaid=0;

  constructor(public navCtrl: NavController,public recordingprovider:CustomTrackProvider,public sharedprovider:SharedProvider, public navParams: NavParams) {
  }

  increment(amount) {
    this.moneypaid= this.moneypaid + amount;
  }

  reduce(amount) {
     if (this.moneypaid-amount >= 0){
    this.moneypaid = this.moneypaid - amount;}
    else{
      this.moneypaid = 0;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmountpaidPage');
  }

  producesound () {
    this.sharedprovider.producesound("Enter how much money you paid for this running cost");
 }

gotorunningcosts(){
    this.recordingprovider.acceptaddition(this.moneypaid);
    this.navCtrl.setRoot(RunningcostsPage);

}


}
