import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WriteNewPostPage } from '../write-new-post/write-new-post';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {
    this.posts = af.list('/POSTS/');
  }

  writeNewPost() {
    this.navCtrl.push(WriteNewPostPage);
  }

}
