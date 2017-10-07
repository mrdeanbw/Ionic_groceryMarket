import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { UserService } from '../../services/user-services';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  loginData = { email: '', password: ''};
  data: any;
  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public loadingCtrl: LoadingController, private toastCtrl: ToastController ) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  login() {
    // add your check auth here
    //this.navCtrl.setRoot(HomePage);

    if (this.loginData.email == ''){
        this.presentToast('Please Input Email');
        return;
    }
    if (!this.EMAIL_REGEXP.test(this.loginData.email)) {
        this.presentToast('Email is Invalid');
        return;
    }
    if (this.loginData.password == ''){
        this.presentToast('Please Input Password');
        return;
    }

    this.showLoader();
    this.userService.login(this.loginData).then((result) => {
        this.loading.dismiss();
        this.data = result;
        console.log(this.data.headers.get('x-auth'));
        this.presentToast(this.data.headers.get('x-auth'));
        // console.log(result);
        //localStorage.setItem('token', this.data.access_token);
        this.navCtrl.setRoot(HomePage);
    }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
    });
    // this.navCtrl.setRoot(HomePage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Loading...'
    });

    this.loading.present();
  }

  presentToast(msg){
    let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  
}
