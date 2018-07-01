import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ReportIncidentPage } from '../pages/report-incident/report-incident';
import { IncidentHistoryPage } from '../pages/incident-history/incident-history';
import { EmergencyNoPage } from '../pages/emergency-no/emergency-no';
import { SafetyTipsPage } from '../pages/safety-tips/safety-tips';
import { HelpPage } from '../pages/help/help';
import { EditAccountPage } from '../pages/edit-account/edit-account';
import { LogoutPage } from '../pages/logout/logout';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav:Nav;

  pages : Array<{title: String, component:any}>;


  constructor(
     public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    this.intializeApp();

    this.pages = [
      {title: "Home", component: HomePage},
      {title: "About", component: AboutPage},
      {title: "Contact", component: ContactPage},
      {title: "Report Incident", component: ReportIncidentPage},
      {title: "Incident History", component: IncidentHistoryPage},
      {title: "Emergency Numbers", component: EmergencyNoPage},
      {title: "Safety Tips", component: SafetyTipsPage},
      {title: "Help", component: HelpPage},
      {title: "Edit Account", component: EditAccountPage},
      {title: "Logout", component: LoginPage}
    ];

  }
  intializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page)
  {
    console.log(page.component);
  this.nav.setRoot(page.component)  ;
  }
}
