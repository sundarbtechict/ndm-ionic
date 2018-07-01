import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams ,App} from 'ionic-angular';
import {ReportIncidentPage} from "../report-incident/report-incident";



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,  public menu: MenuController , public navParams: NavParams,public app:App)
  {
    console.log('hi da');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');

  }
  onSignup(){
    this.navCtrl.setRoot(ReportIncidentPage);
  }
  onBack(){
    this.navCtrl.pop();
  }
  /*ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);
    console.log('ionViewDidLoad SignupPage2222');

  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(false);
  }*/
}
