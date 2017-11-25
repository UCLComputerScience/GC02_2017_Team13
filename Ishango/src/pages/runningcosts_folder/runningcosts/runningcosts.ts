import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';

/**
 * Generated class for the RunningcostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-runningcosts',
  templateUrl: 'runningcosts.html',
})
export class RunningcostsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public sharedprovider:SharedProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunningcostsPage');
  }

}
