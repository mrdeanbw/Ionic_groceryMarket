import {Component, OnInit, ViewChild} from '@angular/core';
import {Navbar, NavController, NavParams} from 'ionic-angular';
import {ProductListByCategoryPage} from "../product-list-by-category/product-list-by-category-page";

import { ShopService } from '../../services/shop-services';
import { LoadingService } from '../../services/loading-service';
/*
  Generated class for the CategoryList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html'
})
export class CategoryListPage implements OnInit {
  items: any;
  subcategories: any;
 
  @ViewChild('navBar') navBar : Navbar;

  shop: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shopService: ShopService, public loadingService: LoadingService ) {}

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  ionViewDidLoad(){
    console.log("shop", this.navParams.data);
    this.shop = this.navParams.data;
    this.loadingService.showLoader();
    this.shopService.getCategories(this.shop._id).then((res) => {
      this.loadingService.loading.dismiss();
      console.log("categories", res);
      this.items = res;
    });
  }

  selectCategory(item: any) {
    console.log("click category:", item);
    this.shopService.getSubCategories(item._id).then((res) => {
      console.log("subcategories:", res);
      this.subcategories = res;
      this.navCtrl.push(ProductListByCategoryPage, {
        category: item,
        shop: this.navParams.data,
        subcategories: this.subcategories
      });
    });
  }

}
