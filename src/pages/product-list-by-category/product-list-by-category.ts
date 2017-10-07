import {Component} from '@angular/core';
import {NavController, NavParams, App} from 'ionic-angular';

import { ProductDetailsPage } from '../product-details/product-details';
import { ShopService } from '../../services/shop-services';
import { LoadingService } from '../../services/loading-service';
/*
  Generated class for the ProductListByCategory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-list-by-category',
  templateUrl: 'product-list-by-category.html'
})
export class ProductListByCategory {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public shopService: ShopService, public loadingService: LoadingService ) {}

  ngOnInit():void {
    // console.log(this.navParams.data);
  }

  ionViewDidLoad(){
      this.shopService.getItems(this.navParams.data.shop._id, this.navParams.data.category._id, this.navParams.data.subcategory._id).then((res) => {
          this.items = res;
      });
  }
  getItems(category, subcategory) {
      // console.log("param category", category);
      // console.log("param subcategory", subcategory);
      // this.loadingService.showLoader();
      // this.shopService.getItems(this.navParams.data.shop._id, category._id, subcategory._id).then((res) => {
      //     this.loadingService.loading.dismiss();
      //     console.log("items:", res);
      //     this.items = res;
      // });
  }

  increase(item: any){
      item.count += 1;
  }

  decrease(item: any){
      if (item.count == 0) return;
      item.count -= 1;
  }

  gotoProductDetail(item: any){
      this.app.getRootNav().push(ProductDetailsPage, {
          item: item,
          shop: this.navParams.data.shop
      });
  }
}
