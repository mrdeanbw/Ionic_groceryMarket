import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

/*
  Generated class for the AddAddress page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html'
})
export class AddAddressPage {

  @ViewChild('navBar') navBar : Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAddressPage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  addAddress(){
    this.navCtrl.pop();
  }
}
