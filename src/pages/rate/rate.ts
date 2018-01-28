import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  review = {}
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = 'David Kim';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }

  leaveRating(id, num) {
    console.log(id); //user id
    console.log(num); // the rating
  }

  logForm() {
    console.log(this.review);
  }
}
