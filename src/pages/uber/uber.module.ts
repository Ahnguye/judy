import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UberPage } from './uber';

@NgModule({
  declarations: [
    UberPage,
  ],
  imports: [
    IonicPageModule.forChild(UberPage),
  ],
})
export class UberPageModule {}
