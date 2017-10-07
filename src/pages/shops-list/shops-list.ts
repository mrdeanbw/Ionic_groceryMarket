import {Component, OnInit, ViewChild} from '@angular/core';
import {Navbar, NavController, NavParams} from 'ionic-angular';
import {CategoryListPage} from "../category-list/category-list";

import { ShopService } from '../../services/shop-services';
import { LoadingService } from '../../services/loading-service';
/*
  Generated class for the ShopsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shops-list',
  templateUrl: 'shops-list.html'
})
export class ShopsListPage implements OnInit {
  // items = [{
  //   name: 'Whole Foods',
  // }, {name: 'D-Mart'}, {name: 'Wallmart'}, {name: 'SPAR'}];
  items : any;
  zipcode = '010101';

  @ViewChild('navBar') navBar: Navbar;

  constructor(public navCtrl: NavController, public shopService: ShopService, public navParams: NavParams, public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  ionViewDidLoad() {
    this.loadingService.showLoader();
    this.shopService.getShopName(this.zipcode).then((res) => {
      this.loadingService.loading.dismiss();
      console.log(res);
      this.items = res;
    }, (err) => {
      this.loadingService.loading.dismiss();
      this.loadingService.presentToast(err);
    });
  }

  selectCategory(item: any) {
    this.navCtrl.push(CategoryListPage, item);
  }

}
