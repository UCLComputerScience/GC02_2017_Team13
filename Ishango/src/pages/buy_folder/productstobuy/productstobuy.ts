import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotobuyPage } from '../photobuy/photobuy';
import { SharedProvider } from '../../../providers/sharedprovider/sharedprovider';
import { QuantitytobuyPage } from '../quantitytobuy/quantitytobuy';
import { DeleteitemPage } from '../../../pages/buy_folder/deleteitem/deleteitem';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-productstobuy',
  templateUrl: 'productstobuy.html'
})
export class ProductstobuyPage {
  
   private quantity = [];
   private moneypaid = [];
   private totalmoneypaid = [];


   
   //array with photos
   public photos = [];
   public base64Image: any;


  constructor(public navCtrl: NavController, public sharedprovider: SharedProvider, private camera: Camera, public storage:Storage) {
    
     this.photos = this.sharedprovider.photos;
     this.quantity = this.sharedprovider.quantity;
     this.moneypaid = this.sharedprovider.moneypaid;
     this.totalmoneypaid = this.sharedprovider.totalmoneypaid;

  }



//takes pictures and save them in array photos and provider
  // ngOnInit() {
  //   this.photos = [];
  // }
  takePhoto() {
    const options: CameraOptions = {
    quality: 40,
    allowEdit: true,
    correctOrientation: true, 
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      //adding at index 0
      this.sharedprovider.photosTemp.push(this.base64Image);
      this.sharedprovider.photosDebtTemp.push(this.base64Image); 

    }, (err) => {
     // Handle error
    });

    // this.sharedprovider.photosTemp.push(this.photos);
    this.navCtrl.push(QuantitytobuyPage);
}
/////////////////


takePhoto1(index){
    const options: CameraOptions = {
  quality: 40,
  allowEdit: true,
  correctOrientation: true, 
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
  this.base64Image = 'data:image/jpeg;base64,' + imageData;
  this.photos[index] = this.base64Image;

}, (err) => {
 // Handle error
});
this.sharedprovider.photos[index] = this.photos[index];
 }


  gotodeleteitem(id){
    this.sharedprovider.index = id;
    this.navCtrl.push(DeleteitemPage);

  }

  buymoreofthesame(index){
    this.sharedprovider.buysameitem = true;
    this.sharedprovider.index = index;
    this.sharedprovider.photosDebtTemp.push(this.photos[index]); 
    this.navCtrl.push(QuantitytobuyPage);
    

  }

  producesound (preset) {
    if(preset==1)
    {
      this.sharedprovider.producesound("In this screen appear all the products you have bought");
    }
    else if (preset==2)
    {
      this.sharedprovider.producesound("this column shows a photo of your product");
    }
    else if (preset==3)
    {
      this.sharedprovider.producesound("this column shows the quantity of your product");
    }
     
  }

}
