import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProductstobuyPage } from '../pages/buy_folder/productstobuy/productstobuy';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RunningcostsPage } from '../pages/runningcosts_folder/runningcosts/runningcosts';
import { StockPage } from '../pages/stock/stock';
import { FeaturesPage } from '../pages/features/features';
import { PhotobuyPage } from '../pages/buy_folder/photobuy/photobuy';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QuantitytobuyPage } from '../pages/buy_folder/quantitytobuy/quantitytobuy';
import { QuantitytosellPage } from '../pages/sell_folder/quantitytosell/quantitytosell';
import { AddnewsalePage } from '../pages/sell_folder/addnewsale/addnewsale';
import { IscashpaidPage } from '../pages/buy_folder/iscashpaid/iscashpaid';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedProvider } from '../providers/sharedprovider/sharedprovider';
import { HttpModule } from '@angular/http';
import { MoneypaidPage } from '../pages/buy_folder/moneypaid/moneypaid';
import { ProductstosellPage } from '../pages/sell_folder/productstosell/productstosell';
import { VoicerecordPage } from '../pages/voicerecord/voicerecord';
import { AddneworexPage } from '../pages/buy_folder/addneworex/addneworex';
import { HideFabDirective } from '../directives/hide-fab/hide-fab';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { DeleteitemPage } from '../pages/buy_folder/deleteitem/deleteitem';
import { Device } from '@ionic-native/device';



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
    AddnewsalePage



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
    AddnewsalePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,TextToSpeech, Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedProvider
  ]
})
export class AppModule {}
