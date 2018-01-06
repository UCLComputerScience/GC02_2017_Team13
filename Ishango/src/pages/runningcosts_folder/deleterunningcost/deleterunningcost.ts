import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomTrackProvider } from '../../../providers/custom-track/custom-track';
import { RunningcostsPage } from '../../../pages/runningcosts_folder/runningcosts/runningcosts';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';




@IonicPage()
@Component({
  selector: 'page-deleterunningcost',
  templateUrl: 'deleterunningcost.html',
})
export class DeleterunningcostPage {

  constructor(public recordingprovider: CustomTrackProvider,public sharedprovider:SharedProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleterunningcostPage');
  }


  producesound () {
    this.sharedprovider.producesound("If you really want to delete this item click the green button. If you want to cancel and return to the running cost screen click the red button");
}

yes() {
  this.recordingprovider.delete();
  this.navCtrl.setRoot(RunningcostsPage);
}
no() {
  this.navCtrl.setRoot(RunningcostsPage);
}

}
