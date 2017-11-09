import { Component } from '@angular/core';

import { ProductsPage } from '../products/products';
import { SalesPage } from '../sales/sales';
import { HomePage } from '../home/home';
import { RunningcPage } from '../runningc/runningc';
import { StockPage } from '../stock/stock';
import { FeaturesPage } from '../features/features';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public hideTabs:boolean = true;

  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = SalesPage;
  tab4Root = RunningcPage;
  tab5Root = StockPage;
  tab6Root = FeaturesPage;



  constructor() {

  }
}
