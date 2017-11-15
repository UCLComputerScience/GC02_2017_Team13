import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QuantitytosellPage } from '../quantitytosell/quantitytosell';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';


/**
 * Generated class for the PhotosoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photosell',
  templateUrl: 'photosell.html',
})
export class PhotosellPage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,private sharedprovider: SharedProvider) {

  }
  ngOnInIt() {

    this.photos = [];
  }
  takephoto() {
    
    const options: CameraOptions = {
      quality: 25,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
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
    
    this.navCtrl.push(QuantitytosellPage);
    
    
    

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosoundPage');
  }

}
