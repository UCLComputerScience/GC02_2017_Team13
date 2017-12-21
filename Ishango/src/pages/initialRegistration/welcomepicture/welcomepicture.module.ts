import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomepicturePage} from './welcomepicture';

@NgModule({
  declarations: [
    WelcomepicturePageModule,
  ],
  imports: [
    IonicPageModule.forChild(WelcomepicturePageModule),
  ],
})
export class WelcomepicturePageModule {}
