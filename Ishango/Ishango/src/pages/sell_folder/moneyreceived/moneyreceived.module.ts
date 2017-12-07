import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoneyreceivedPage } from './moneyreceived';

@NgModule({
  declarations: [
    MoneyreceivedPage,
  ],
  imports: [
    IonicPageModule.forChild(MoneyreceivedPage),
  ],
})
export class MoneyreceivedPageModule {}
