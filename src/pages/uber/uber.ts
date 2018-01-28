import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the UberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uber',
  templateUrl: 'uber.html',
})
export class UberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UberPage');
  }

  callFunction() {
    this.callNumber.callNumber("18001010101", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}



//ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyCLfB3jNyWIrNr6bCMBHsEDXW-UySLxrUY" --variable API_KEY_FOR_IOS="AIzaSyCLfB3jNyWIrNr6bCMBHsEDXW-UySLxrUY"
