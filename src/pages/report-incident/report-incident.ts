
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AddressPage} from "../address/address";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ReportIncidentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-report-incident',
  templateUrl: 'report-incident.html',
})
export class ReportIncidentPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public geo: Geolocation,
    public alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportIncidentPage');
    this.showMap();
  }

  showMap(){

    this.geo.getCurrentPosition().then( pos => {

      let location = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      const map =new google.maps.Map(this.mapElement.nativeElement,{
        center:location,
        zoom:15
      });
      this.addMarker(location,map);
    }).catch( err => console.log(err));

  }
  addMarker(position,map)
  {
    return new google.maps.Marker({
      position,
      map
    });
  }
  onReport(){
    const confirm = this.alertCtrl.create({
      title: 'Confrimation',
      message: 'Do you agree to report this incident?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();

  }
  onReportByAddress(){
    this.navCtrl.push(AddressPage);
  }
}
