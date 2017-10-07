import { Component, ViewChild } from '@angular/core';
import { Navbar, NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';
/*
  Generated class for the ProductDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  @ViewChild('navBar') navBar : Navbar;
  item: any;
  checked: boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = this.navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  increase(item: any){
      item.count += 1;
  }

  decrease(item: any){
      if (item.count == 0) return;
      item.count -= 1;
  }

  onCheck(){
      let chk = <HTMLInputElement>document.getElementById('savecheck');

      if (!chk.checked){
          this.checked = true;
      }else{
          this.checked = false;
      }
  }

  gotoCartPage(){
      this.navCtrl.push(CartPage);
  }
}
