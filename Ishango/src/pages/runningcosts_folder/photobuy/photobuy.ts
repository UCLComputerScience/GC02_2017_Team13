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
  ngOnInIt() {

    this.photos = [];
  }
  
  takephoto() {
    
    const options: CameraOptions = {
    quality : 75,
           destinationType : this.camera.DestinationType.DATA_URL,
           sourceType : this.camera.PictureSourceType.CAMERA,
           allowEdit : false, //To enable/disable the user editing in camera
           encodingType: this.camera.EncodingType.JPEG,
           targetWidth: 640,
           targetHeight: 400,
           saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      // Handle error
    });
    this.sharedprovider.photosTemp.push(this.photos);
    this.navCtrl.push(QuantitytobuyPage);
  }

  producesound () {
     this.sharedprovider.producesound("Now, the camera will open to take a picture of the new item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosoundPage');
  }

}
