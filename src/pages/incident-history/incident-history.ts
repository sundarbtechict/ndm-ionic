import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the IncidentHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incident-history',
  templateUrl: 'incident-history.html',
})
export class IncidentHistoryPage {
  incidents : Array<{title: String, date:String,time:String,location:String,description:String,action:String,dateTimeOfAction:String}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.incidents = [
      {title: "incident 1",date:"12/09/18",time:"12:30 pm", location:"address 1",description:"some description",action:"not completed", dateTimeOfAction:""},
      {title: "incident 3",date:"16/09/18",time:"01:40 pm", location:"address 2",description:"some description",action:"not completed", dateTimeOfAction:""},
      {title: "incident 4",date:"10/09/18",time:"11:60 am", location:"address 3",description:"some description",action:"completed", dateTimeOfAction:"16/09/18"},
      {title: "incident 5",date:"01/09/18",time:"10:20 pm", location:"address 4",description:"some description",action:"completed", dateTimeOfAction:"12/09/18"},
      {title: "incident 3",date:"22/08/18",time:"12:30 pm", location:"address 4",description:"some description",action:"not completed", dateTimeOfAction:""},
      {title: "incident 4",date:"22/08/18",time:"09:30 am", location:"address 5",description:"some description",action:"completed", dateTimeOfAction:"12/09/18"},
      {title: "incident 5",date:"20/08/18",time:"11:40 pm", location:"address 6",description:"some description",action:"not completed", dateTimeOfAction:""},
      {title: "incident 6",date:"18/08/18",time:"08:50 am", location:"address 5",description:"some description",action:"completed", dateTimeOfAction:"22/08/18"},
      {title: "incident 3",date:"12/08/18",time:"03:30 am", location:"address 6",description:"some description",action:"completed", dateTimeOfAction:"22/08/18"},
      {title: "incident 7",date:"10/08/18",time:"05:10 pm", location:"address 5",description:"some description",action:"not completed", dateTimeOfAction:""},
      {title: "incident 8",date:"02/08/18",time:"07:00 am", location:"address 5",description:"some description",action:"completed", dateTimeOfAction:"02/08/18"},
      {title: "incident 2",date:"28/07/18",time:"02:05 pm", location:"address 4",description:"some description",action:"not completed", dateTimeOfAction:""},
      {title: "incident 1",date:"20/07/18",time:"04:34 am", location:"address 7",description:"some description",action:"not completed", dateTimeOfAction:""},
      {title: "incident 4",date:"12/07/18",time:"05:39 pm", location:"address 9",description:"some description",action:"completed", dateTimeOfAction:"02/08/18"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidentHistoryPage');
  }
  show(incident) {
    let msg: string ="<ion-item><p><b>Incident Type </b><br>"+incident.title+"</p></ion-item>"
    +"<ion-item><p><b>Date & Time </b><br>"+incident.date+" & "+incident.time +"</p></ion-item>"
    +"<ion-item><p><b>Description </b><br>"+incident.description +"</p></ion-item>"
    +"<ion-item><p><b>Loaction </b><br>"+incident.location +"</p></ion-item>"
    +"<ion-item><p><b>Action </b><br>"+incident.action +"</p></ion-item>"
    +"<ion-item><p><b>Date & Time of Action</b><br>"+incident.dateTimeOfAction +"</p></ion-item>";

    const alert = this.alertCtrl.create({
      title: 'Incident Details',
      subTitle:msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
