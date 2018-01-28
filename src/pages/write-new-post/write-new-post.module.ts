import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WriteNewPostPage } from './write-new-post';

@NgModule({
  declarations: [
    WriteNewPostPage,
  ],
  imports: [
    IonicPageModule.forChild(WriteNewPostPage),
  ],
})
export class WriteNewPostPageModule {}
