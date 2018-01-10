import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Running Cost pages
import { RunningcostsPage } from '../pages/runningcosts_folder/runningcosts/runningcosts';
import { RecordPage } from '../pages/runningcosts_folder/record/record';
import { DeleterunningcostPage } from '../pages/runningcosts_folder/deleterunningcost/deleterunningcost';
import { AmountpaidPage } from '../pages/runningcosts_folder/amountpaid/amountpaid';

//Custom recordings pages
import { AllrecordingsPage } from '../pages/features/allrecordings/allrecordings';
import { CreaterecordingPage } from '../pages/features/createrecording/createrecording';
import { DeleterecordingPage } from '../pages/features/deleterecording/deleterecording';

//Bying product pages
import { ProductstobuyPage } from '../pages/buy_folder/productstobuy/productstobuy';
import { QuantitytobuyPage } from '../pages/buy_folder/quantitytobuy/quantitytobuy';
import { MoneypaidPage } from '../pages/buy_folder/moneypaid/moneypaid';
import { IscashpaidPage } from '../pages/buy_folder/iscashpaid/iscashpaid';
import { DeleteitemPage } from '../pages/buy_folder/deleteitem/deleteitem';

//Selling product pages
import { ProductstosellPage } from '../pages/sell_folder/productstosell/productstosell';
import { AddnewsalePage } from '../pages/sell_folder/addnewsale/addnewsale';
import { QuantitytosellPage } from '../pages/sell_folder/quantitytosell/quantitytosell';
import { MoneyreceivedPage } from '../pages/sell_folder/moneyreceived/moneyreceived';
import { IscashreceivedPage } from '../pages/sell_folder/iscashreceived/iscashreceived';
import { DeletesellPage } from '../pages/sell_folder/deletesell/deletesell';

//Creditors repayment pages
import { AmountrepaidPage } from '../pages/debt/amountrepaid/amountrepaid';
import { ConfirmationPage } from '../pages/debt/confirmation/confirmation';
import { DebtperproductPage } from '../pages/debt/debtperproduct/debtperproduct';

//Debtors repayment pages
import { AmountcollectedPage } from '../pages/credit/amountcollected/amountcollected';
import { ConfirmationcreditPage } from '../pages/credit/confirmationcredit/confirmationcredit';
import { CreditperproductPage } from '../pages/credit/creditperproduct/creditperproduct';

//Initial registration pages
import { CashregisterPage } from '../pages/initialRegistration/cashregister/cashregister';
import { WelcomePage } from '../pages/initialRegistration/welcome/welcome';
import { IonicStorageModule } from '@ionic/storage';

//Splash screen, shared provider, and plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedProvider } from '../providers/sharedprovider/sharedprovider';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Device } from '@ionic-native/device';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicAudioModule } from 'ionic-audio/dist';
import { CustomTrackProvider } from '../providers/custom-track/custom-track';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductstobuyPage,
    ProductstosellPage,
    QuantitytobuyPage,
    QuantitytosellPage,
    MoneypaidPage,
    IscashpaidPage,
    TabsPage,
    RunningcostsPage,
    AllrecordingsPage,
    DeleteitemPage,
    AddnewsalePage,
    MoneyreceivedPage,
    IscashreceivedPage,
    DebtperproductPage,
    ConfirmationPage,
    AmountrepaidPage,
    CashregisterPage,
    WelcomePage,
    RecordPage,
    DeleterunningcostPage,
    AmountpaidPage,
    CreaterecordingPage,
    DeleterecordingPage,
    DeletesellPage,
    AmountcollectedPage,
    ConfirmationcreditPage,
    CreditperproductPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }), IonicStorageModule.forRoot(), IonicAudioModule.forRoot()
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
    AllrecordingsPage,
    QuantitytobuyPage,
    IscashpaidPage,
    MoneypaidPage,
    DeleteitemPage,
    AddnewsalePage,
    MoneyreceivedPage,
    IscashreceivedPage,
    DebtperproductPage,
    ConfirmationPage,
    AmountrepaidPage,
    CashregisterPage,
    WelcomePage,
    RecordPage,
    DeleterunningcostPage,
    AmountpaidPage,
    CreaterecordingPage,
    DeleterecordingPage,
    DeletesellPage,
    AmountcollectedPage,
    ConfirmationcreditPage,
    CreditperproductPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, TextToSpeech, Device,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SharedProvider, CustomTrackProvider, Storage
  ],
})
export class AppModule { }
