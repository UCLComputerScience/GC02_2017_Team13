import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QuantitytobuyPage } from '../quantitytobuy/quantitytobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';

/**
 * Generated class for the PhotosoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photobuy',
  templateUrl: 'photobuy.html',
})
export class PhotobuyPage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private sharedprovider: SharedProvider) {

  }
  

  ngOnInit() {
    this.photos = [];

  }

  takePhoto() {

const options: CameraOptions = {
  quality: 30,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
  this.base64Image = 'data:image/jpeg;base64,' + imageData;
//adding at index 0
  this.photos.unshift(this.base64Image);
}, (err) => {
 // Handle error
});
this.sharedprovider.photos.push(this.photos);
}



  producesound () {
     this.sharedprovider.producesound("Now, the camera will open to take a picture of the new item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosoundPage');
  }

}
