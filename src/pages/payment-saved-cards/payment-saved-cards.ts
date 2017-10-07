import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { SuperTabsComponent } from "ionic2-super-tabs";

import { SavedDetailsPage } from './saved-details';
/*
  Generated class for the PaymentSavedCards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment-saved-cards',
  templateUrl: 'payment-saved-cards.html'
})
export class PaymentSavedCardsPage {

  @ViewChild('navBar') navBar : Navbar;
  @ViewChild('paymentTabs') paymentTabs : SuperTabsComponent;

  tabs = [
    {
      'page' : SavedDetailsPage,
      'title': 'Saved Detail'
    },
    {
      'page' : SavedDetailsPage,
      'title': 'Credit Card'
    },
    {
      'page' : SavedDetailsPage,
      'title': 'PayPal'
    }
  ];
  savedDetails = SavedDetailsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSavedCardsPage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
    this.paymentTabs.slides.pager = true;
    this.paymentTabs.slides.update();
  }
}
