import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CounselorPage } from './counselor';

@NgModule({
  declarations: [
    CounselorPage,
  ],
  imports: [
    IonicPageModule.forChild(CounselorPage),
  ],
  exports: [
    CounselorPage
  ]
})
export class CounselorPageModule {}
