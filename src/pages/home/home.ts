import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WriteNewPostPage } from '../write-new-post/write-new-post';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

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

    console.log(this.posts);
  }

  writeNewPost() {
    this.navCtrl.push(WriteNewPostPage);
  }

}
