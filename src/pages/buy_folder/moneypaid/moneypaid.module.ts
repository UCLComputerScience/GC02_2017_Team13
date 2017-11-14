import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoneypaidPage } from './moneypaid';

@NgModule({
  declarations: [
    MoneypaidPage,
  ],
  imports: [
    IonicPageModule.forChild(MoneypaidPage),
  ],
})
export class MoneypaidPageModule {}
