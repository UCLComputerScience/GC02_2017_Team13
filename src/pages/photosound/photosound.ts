import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the PhotosoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photosound',
  templateUrl: 'photosound.html',
})
export class PhotosoundPage {
  public photos:any;
  public base64Image:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {

  }
  ngOnInIt(){
    
        this.photos=[];
      }
      takephoto(){
        const options: CameraOptions = {
          quality: 50,
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
    
      }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosoundPage');
  }

}
