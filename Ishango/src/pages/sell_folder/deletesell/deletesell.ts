import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductstosellPage } from '../../../pages/sell_folder/productstosell/productstosell';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';


@IonicPage()
@Component({
  selector: 'page-deletesell',
  templateUrl: 'deletesell.html',
})
export class DeletesellPage {

  constructor(public sharedprovider:SharedProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  //function executed when the user confirms to delete a sale
  yes(index) {
    this.sharedprovider.deleteSell();
    this.navCtrl.setRoot(ProductstosellPage);
  }
    //function executed when the user cancel the deletion of a sale
  no() {
    this.navCtrl.setRoot(ProductstosellPage);
  }
  producesound () {
    this.sharedprovider.producesound("If you really want to delete this sale click the green button. If you want to cancel click the red button");
}

}
