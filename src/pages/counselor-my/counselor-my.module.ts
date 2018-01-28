import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CounselorMyPage } from './counselor-my';

@NgModule({
  declarations: [
    CounselorMyPage,
  ],
  imports: [
    IonicPageModule.forChild(CounselorMyPage),
  ],
})
export class CounselorMyPageModule {}
