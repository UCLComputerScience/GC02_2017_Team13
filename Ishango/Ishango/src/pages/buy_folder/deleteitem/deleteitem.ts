import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductstobuyPage } from '../productstobuy/productstobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';



@IonicPage()
@Component({
  selector: 'page-deleteitem',
  templateUrl: 'deleteitem.html',
})
export class DeleteitemPage {
 

  constructor(public sharedprovider: SharedProvider, public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteitemPage');
  }

  yes(index) {
    this.sharedprovider.deleteitem();
    this.navCtrl.setRoot(ProductstobuyPage);
  }
  no() {
    this.navCtrl.setRoot(ProductstobuyPage);
  }

  producesound () {
       this.sharedprovider.producesound("If you really want to delete this item click the blue button. If you want to cancel and return to the products screen click the red button");
  }






}
