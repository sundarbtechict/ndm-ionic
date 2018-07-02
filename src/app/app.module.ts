import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ReportIncidentPage } from '../pages/report-incident/report-incident';
import { AddressPage} from "../pages/address/address";
import { IncidentHistoryPage } from '../pages/incident-history/incident-history';
import { EmergencyNoPage } from '../pages/emergency-no/emergency-no';
import { SafetyTipsPage } from '../pages/safety-tips/safety-tips';
import { HelpPage } from '../pages/help/help';
import { EditAccountPage } from '../pages/edit-account/edit-account';
import { LogoutPage } from '../pages/logout/logout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    LoginPage,
    ReportIncidentPage,
    AddressPage,
    IncidentHistoryPage,
    EmergencyNoPage,
    SafetyTipsPage,
    HelpPage,
    EditAccountPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    LoginPage,
    ReportIncidentPage,
    AddressPage,
    IncidentHistoryPage,
    EmergencyNoPage,
    SafetyTipsPage,
    HelpPage,
    EditAccountPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions
  ]
})
export class AppModule {}
