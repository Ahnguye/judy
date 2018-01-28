import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { CounselorPage } from '../counselor/counselor';
import { ProfilePage } from '../profile/profile';
import { CounselorMyPage } from '../counselor-my/counselor-my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = ContactPage;


  constructor() {

  }
}
