import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WriteNewPostPage } from '../pages/write-new-post/write-new-post';
import { WriteNewPostPageModule } from '../pages/write-new-post/write-new-post.module';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage } from '../pages/chat/chat';
import { ChatPageModule } from '../pages/chat/chat.module';
import { CounselorPage } from '../pages/counselor/counselor';
import { CounselorPageModule } from '../pages/counselor/counselor.module';
import { ProfilePage } from '../pages/profile/profile';
import { ProfilePageModule } from '../pages/profile/profile.module';

import { CounselorMyPageModule } from '../pages/counselor-my/counselor-my.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';

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

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ChatPageModule,
    CounselorPageModule,
    ProfilePageModule,
    WriteNewPostPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WriteNewPostPage,
    CounselorPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    EventProvider,
    ProfileProvider,
  ]
})
export class AppModule { }
