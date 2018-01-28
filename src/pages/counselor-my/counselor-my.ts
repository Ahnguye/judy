import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

/**
 * Generated class for the CounselorMyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-counselor-my',
  templateUrl: 'counselor-my.html',
})
export class CounselorMyPage {
  counselors:FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, public modalCtrl: ModalController) {
    this.counselors = af.list('COUNCILOR');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CounselorMyPage');
  }

}
