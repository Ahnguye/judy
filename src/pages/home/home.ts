import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WriteNewPostPage } from '../write-new-post/write-new-post';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { CounselorPage } from '../counselor/counselor';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  UrCategory: Array<any> = [];

  afPosts: FirebaseListObservable<any[]>;
  posts: any[] = [];


  constructor(public navCtrl: NavController, public af: AngularFireDatabase, private alertCtrl: AlertController) {
    this.afPosts = af.list('/POSTS/');
    this.UrCategory = [
      { title: 'food' },
      { title: 'family' }
    ];

    this.afPosts.subscribe(
      postsArray => {
        this.posts.push(postsArray);
      }
    );

  }

  writeNewPost() {
    this.navCtrl.push(WriteNewPostPage);
  }


  goCounselorPage() {
    this.navCtrl.push(CounselorPage);
  }

  presentCounselorInfo() {
    let alert = this.alertCtrl.create({
      title: 'Do you feel bad today? TT',
      message: 'Do you want talk to your counselor?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(CounselorPage);
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  

}
