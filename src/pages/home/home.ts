import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WriteNewPostPage } from '../write-new-post/write-new-post';
import { ChatPage } from '../chat/chat';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  UrCategory: Array<any> = [];

  afPosts: FirebaseListObservable<any[]>;
  posts: any[] = [];


  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {
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

  goChat() {
    this.navCtrl.push(ChatPage);
  }

  goLogin() {
    this.navCtrl.push(LoginPage);
  }

}
