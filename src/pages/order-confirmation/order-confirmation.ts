import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

/*
  Generated class for the OrderConfirmation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-confirmation',
  templateUrl: 'order-confirmation.html'
})
export class OrderConfirmationPage {

  @ViewChild('navBar') navBar : Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmationPage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

}
