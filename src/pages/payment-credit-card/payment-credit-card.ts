import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

import { OrderConfirmationPage } from '../order-confirmation/order-confirmation';
/*
  Generated class for the PaymentCreditCard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment-credit-card',
  templateUrl: 'payment-credit-card.html'
})
export class PaymentCreditCardPage {

  @ViewChild('navBar') navBar : Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentCreditCardPage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  gotoOrderConfirmation() {
    this.navCtrl.push(OrderConfirmationPage);
  }
}
