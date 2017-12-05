import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashregisterPage } from './cashregister';

@NgModule({
  declarations: [
    CashregisterPage,
  ],
  imports: [
    IonicPageModule.forChild(CashregisterPage),
  ],
})
export class CashregisterPageModule {}
