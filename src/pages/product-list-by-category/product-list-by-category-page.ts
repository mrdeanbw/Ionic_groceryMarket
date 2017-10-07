import {Component, OnInit, ViewChild} from '@angular/core';
import {Navbar, NavController, NavParams, Slides} from 'ionic-angular';
import {ProductListByCategory} from "./product-list-by-category";
// import {SuperTabsComponent} from "ionic2-super-tabs";

import { CartPage } from '../cart/cart';
import { LoadingService } from '../../services/loading-service';
/*
  Generated class for the ProductListByCategory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-list-by-category-page',
  templateUrl: 'product-list-by-category-page.html'
})
export class ProductListByCategoryPage implements OnInit {
  @ViewChild('navBar') navBar : Navbar;
  @ViewChild('contentSlides') contentSlides : Slides;
  // @ViewChild('categoryTabs') categoryTabs : SuperTabsComponent;

  root = ProductListByCategory;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
    // this.categoryTabs.slides.pager = true;
    // this.categoryTabs.slides.update();
    this.loadingService.showLoader();
  }

  ionViewDidEnter(){
    this.loadingService.loading.dismiss();
  }
  gotoCartPage(){
      this.navCtrl.push(CartPage);
  }
}
