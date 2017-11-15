import { Component } from '@angular/core';

import { ProductstobuyPage } from '../buy_folder/productstobuy/productstobuy';
import { ProductstosellPage } from '../sell_folder/productstosell/productstosell';
import { HomePage } from '../home/home';
import { RunningcostsPage } from '../runningcosts_folder/runningcosts/runningcosts';
import { FeaturesPage } from '../features/features';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public hideTabs:boolean = true;

  tab1Root = HomePage;
  tab2Root = ProductstobuyPage;
  tab3Root = ProductstosellPage;
  tab4Root = RunningcostsPage;
  tab6Root = FeaturesPage;



  constructor() {

  }
}
