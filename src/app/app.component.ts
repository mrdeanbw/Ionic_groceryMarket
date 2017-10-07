import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OrderConfirmationPage } from '../pages/order-confirmation/order-confirmation';

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  public rootPage:any;
  public nav:any;
  public pages = [
    {
      title: 'Home',
      icon: 'ios-home-outline',
      component: HomePage
    },
    {
      title: 'Recent posts',
      icon: 'ios-list-box-outline',
      component: HomePage
    },
    
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = LoginPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.nav.setRoot(LoginPage);
  }
}
