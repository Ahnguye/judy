import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WriteNewPostPage } from '../pages/write-new-post/write-new-post';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { UberPage } from '../pages/uber/uber';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CallNumber } from '@ionic-native/call-number';

import { AgmCoreModule } from '@agm/core';

var firebaseConfig = {
  apiKey: "AIzaSyBDCGL3aHjA8UoaoIP77_cCabHeOSuGxcg",
  authDomain: "judytelljudy.firebaseapp.com",
  databaseURL: "https://judytelljudy.firebaseio.com",
  projectId: "judytelljudy",
  storageBucket: "judytelljudy.appspot.com",
  messagingSenderId: "90576902341"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WriteNewPostPage,
    ChatPage,
    ProfilePage,
    UberPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLfB3jNyWIrNr6bCMBHsEDXW-UySLxrUY'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WriteNewPostPage,
    ChatPage,
    ProfilePage,
    UberPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
