import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides, Events } from "ionic-angular";
import { SuperTabsComponent } from "ionic2-super-tabs";
import { ProductsTab } from '../products/products';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild('contentSlides') contentSlides : Slides;
  @ViewChild('homeTabs') homeTabs : SuperTabsComponent;
  productRoot = ProductsTab;
  productParams = {
    type: 'product',
    backButtonText: ''
  };
  serviceParams = {
    type: 'service',
    backButtonText: ''
  };

  ngOnInit():void {
    this.homeTabs.slides.pager = true;
    this.homeTabs.slides.update();
  }

  constructor(public navCtrl: NavController, public events: Events) {

  }
}
