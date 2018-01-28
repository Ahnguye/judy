import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  postArray: Array<any> = [];
  categoryArray: Array<any> = [];
  counselorArray: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.postArray = [
      {postID: 322, title: "I don't know why our teachers are so shitty."}
    ];
    this.categoryArray = [
      {categoryID: 1, title: "Academic"},
      {categoryID: 2, title: "Bullying"},
      {categoryID: 3, title: "Drugs"},
      {categoryID: 4, title: "Depressed"},
    ];
    this.counselorArray = [
      {postID: 2311, name: "David Kim"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
