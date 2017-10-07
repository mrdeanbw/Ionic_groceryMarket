import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

import { AddAddressPage } from '../add-address/add-address';
import { PaymentSavedCardsPage } from '../payment-saved-cards/payment-saved-cards';
/*
  Generated class for the Address page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {

  @ViewChild('navBar') navBar : Navbar;

  addresses = [
    {
      "address" : "Address Line 1, Adres Line 2, location name"
    },
    {
      "address" : "Address Line 1, Adres Line 2, location name"
    },
    {
      "address" : "Address Line 1, Adres Line 2, location name"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  gotoAddAddressPage(){
    this.navCtrl.push(AddAddressPage);
  }

  gotoPayment(){
    this.navCtrl.push(PaymentSavedCardsPage);
  }

}
