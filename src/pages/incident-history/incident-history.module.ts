import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncidentHistoryPage } from './incident-history';

@NgModule({
  declarations: [
    IncidentHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(IncidentHistoryPage),
  ],
})
export class IncidentHistoryPageModule {}
