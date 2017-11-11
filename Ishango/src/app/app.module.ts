import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProductsPage } from '../pages/products/products';
import { SalesPage } from '../pages/sales/sales';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RunningcPage } from '../pages/runningc/runningc';
import { StockPage } from '../pages/stock/stock';
import { FeaturesPage } from '../pages/features/features';
import { PhotosoundPage } from '../pages/photosound/photosound';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QuantityPage } from '../pages/quantity/quantity';
import { IscashpaidPage } from '../pages/iscashpaid/iscashpaid';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuantityProvider } from '../providers/quantity/quantity';
import { HttpModule } from '@angular/http';
import { MoneypaidPage } from '../pages/moneypaid/moneypaid';
import { VoicerecordPage } from '../pages/voicerecord/voicerecord';
import { AddneworexPage } from '../pages/addneworex/addneworex';
import { HideFabDirective } from '../directives/hide-fab/hide-fab';


@NgModule({
  declarations: [
    MyApp,
    ProductsPage,
    SalesPage,
    HomePage,
    TabsPage,
    RunningcPage,
    StockPage,
    PhotosoundPage,
    FeaturesPage,
    QuantityPage,
    IscashpaidPage,
    MoneypaidPage,
    VoicerecordPage,
    AddneworexPage,
    HideFabDirective,


  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsPage,
    SalesPage,
    HomePage,
    TabsPage,
    RunningcPage,
    StockPage,
    PhotosoundPage,
    FeaturesPage,
    QuantityPage,
    IscashpaidPage,
    MoneypaidPage,
    VoicerecordPage,
    AddneworexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuantityProvider
  ]
})
export class AppModule {}
