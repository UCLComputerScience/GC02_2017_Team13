import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//pages to review
import { RunningcostsPage } from '../pages/runningcosts_folder/runningcosts/runningcosts';
import { StockPage } from '../pages/stock/stock';
import { FeaturesPage } from '../pages/features/features';

import { ProductstobuyPage } from '../pages/buy_folder/productstobuy/productstobuy';
import { AddneworexPage } from '../pages/buy_folder/addneworex/addneworex';
import { PhotobuyPage } from '../pages/buy_folder/photobuy/photobuy';
import { QuantitytobuyPage } from '../pages/buy_folder/quantitytobuy/quantitytobuy';
import { MoneypaidPage } from '../pages/buy_folder/moneypaid/moneypaid';
import { IscashpaidPage } from '../pages/buy_folder/iscashpaid/iscashpaid';
import { DeleteitemPage } from '../pages/buy_folder/deleteitem/deleteitem';

import { ProductstosellPage } from '../pages/sell_folder/productstosell/productstosell';
import { AddnewsalePage } from '../pages/sell_folder/addnewsale/addnewsale';
import { QuantitytosellPage } from '../pages/sell_folder/quantitytosell/quantitytosell';
import { MoneyreceivedPage } from '../pages/sell_folder/moneyreceived/moneyreceived';
import { IscashreceivedPage } from '../pages/sell_folder/iscashreceived/iscashreceived';

import { AmountrepaidPage } from '../pages/debt/amountrepaid/amountrepaid';
import { ConfirmationPage } from '../pages/debt/confirmation/confirmation';
import { DebtperproductPage } from '../pages/debt/debtperproduct/debtperproduct';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedProvider } from '../providers/sharedprovider/sharedprovider';
import { VoicerecordPage } from '../pages/voicerecord/voicerecord';
import { HideFabDirective } from '../directives/hide-fab/hide-fab';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Device } from '@ionic-native/device';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Camera, CameraOptions } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductstobuyPage,
    ProductstosellPage,
    QuantitytobuyPage,
    QuantitytosellPage,
    AddneworexPage,
    PhotobuyPage,
    MoneypaidPage,
    IscashpaidPage,
    TabsPage,
    RunningcostsPage,
    StockPage,
    FeaturesPage,
    VoicerecordPage,
    HideFabDirective,
    DeleteitemPage,
    AddnewsalePage,
    MoneyreceivedPage,
    IscashreceivedPage,
    DebtperproductPage,
    ConfirmationPage,
    AmountrepaidPage

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductstobuyPage,
    ProductstosellPage,
    QuantitytosellPage,
    HomePage,
    TabsPage,
    RunningcostsPage,
    StockPage,
    PhotobuyPage,
    FeaturesPage,
    QuantitytobuyPage,
    IscashpaidPage,
    MoneypaidPage,
    VoicerecordPage,
    AddneworexPage,
    DeleteitemPage,
    AddnewsalePage,
    MoneyreceivedPage,
    IscashreceivedPage,
    DebtperproductPage,
    ConfirmationPage,
    AmountrepaidPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,TextToSpeech, Device, MediaCapture,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedProvider
  ]
})
export class AppModule {}
