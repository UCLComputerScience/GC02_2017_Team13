import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunningcostsPage } from './runningcosts';

@NgModule({
  declarations: [
    RunningcostsPage,
  ],
  imports: [
    IonicPageModule.forChild(RunningcostsPage),
  ],
})
export class RunningcostsPageModule {}
