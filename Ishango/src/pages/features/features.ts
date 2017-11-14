

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { QuantityProvider } from '../../providers/quantity/quantity';


/**
 * Generated class for the FeaturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-features',
  templateUrl: 'features.html',
})
export class FeaturesPage {

//elements to be displayed in splitted page
  top_item_array = ["Item A", "Item B", "Item C"]
    bottom_item_array = ["Item D", "Item E", "Item F"]

  reorderIsEnabled = false;
  recordings = [1, 2, 3, 4];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

//moving from top array to bottom array
  move_from_top_to_bottom(idx){
      this.bottom_item_array.push(this.top_item_array[idx])
      this.top_item_array.splice(idx, 1)
    }
//moving from bottom array to top array
    move_from_bottom_to_top(idx){
      this.top_item_array.push(this.bottom_item_array[idx])
      this.bottom_item_array.splice(idx, 1)
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturesPage');
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.top_item_array, $event);

  }





}
