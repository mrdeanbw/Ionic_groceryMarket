import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopsListPage } from '../shops-list/shops-list';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsTab {
  items: Array<any>;
  rootNavCtrl: NavController;

  constructor(public navParams : NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    if (navParams.data.type === 'product') {
      this.items = [{
        header: 'Grocery',
        content: 'You can buy from us or your nearest shop of your choice. Get it home delivered',
        img: 'Common/Grocery.png',
        linkText: 'Browse Items and Shops',
        goToShops: true
      }, {
        header: 'Restaurant Food',
        content: 'Browse nearby restaurants and order food online. Get it delivered in 1 hour',
        img: 'Common/Restaurant.png',
        linkText: 'Order Food'
      }, {
        header: 'Laundry Services',
        content: 'Get clothes washed and dry cleaned. Free pick and drop at your location',
        img: 'Common/House CLeaning.png',
        linkText: 'Browse Items and Shops'
      }];
    } else {
      this.items = [{
        header: 'Grocery',
        content: 'You can buy from us or your nearest shop of your choice. Get it home delivered',
        img: 'Common/Grocery.png',
        linkText: 'Browse Items and Shops'
      }];
    }
  }

  browse(item: any) {
    if (item.goToShops) {
      this.rootNavCtrl.setRoot(ShopsListPage);
    }
  }

}
