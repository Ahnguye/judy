import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  //rootPage: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyBDCGL3aHjA8UoaoIP77_cCabHeOSuGxcg",
      authDomain: "judytelljudy.firebaseapp.com",
      databaseURL: "https://judytelljudy.firebaseio.com",
      projectId: "judytelljudy",
      storageBucket: "judytelljudy.appspot.com",
      messagingSenderId: "90576902341"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.rootPage = 'LoginPage';
      unsubscribe();
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
