import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { CalendarController } from 'ion2-calendar/dist';

import { OrderItemsPage } from '../order-items/order-items';
import { CartPage } from '../cart/cart';
/*
  Generated class for the DateTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html'
})
export class DateTimePage {

  @ViewChild('navBar') navBar : Navbar;

  times=[
    "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"
  ];

  time= [false, false, true, false, false, false, false, false, false, false, false, false];

  startDate = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public calendarCtrl: CalendarController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimePage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  nextDate(){
    this.startDate.setDate(this.startDate.getDate() + 1);
  }

  prevDate(){
    this.startDate.setDate(this.startDate.getDate() - 1);
  }

  onClickTime(num){
    this.time.map((item, i) => {
      this.time[i] = false;
    })
    this.time[num] = true;
  }
  openCalendar(){
    this.calendarCtrl.openCalendar({
      from: new Date(),
      weekdaysTitle: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      daysConfig: [
        {
          date: this.startDate,
          marked: true
        }
      ]
      // closeLabel: ''
    })
    .then(res => { 
      this.startDate.setTime(res.date.time);
     })
    .catch(() => {});
  }

  gotoOrderItems(){
      this.navCtrl.push(OrderItemsPage);
  }

  gotoOrderSummany(){
      this.navCtrl.push(CartPage, {state: 'modify'})
  }
}
