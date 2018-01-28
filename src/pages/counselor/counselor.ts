import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the CounselorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-counselor',
  templateUrl: 'counselor.html',
})
export class CounselorPage {

  @ViewChild(Slides) slides: Slides;
  counselors:FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFireDatabase) {
    this.counselors = af.list('/COUNCILORS');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CounselorPage');
    //this.slides.slideTo(2, 1000);
  }

}
