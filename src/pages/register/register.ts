import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

import { UserService } from '../../services/user-services';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  loading: any;
  fullname: string;
  regData = { username:'', email: '', password: '', coordinates: [0,0]};
  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public geolocation: Geolocation) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    console.log("register button clicked.");

    if (this.regData.email == ''){
        this.presentToast('Please Input Email');
        return;
    }
    if (!this.EMAIL_REGEXP.test(this.regData.email)) {
        this.presentToast('Email is Invalid');
        return;
    }
    if (this.regData.password == ''){
        this.presentToast('Please Input Password');
        return;
    }
    if (this.regData.password.length < 6){
        this.presentToast('Password is at least 6 characters');
        return;
    }
    if (this.regData.username == ''){
        this.presentToast('Please Input Username');
        return;
    }

    this.showLoader();
    // this.geolocation.getCurrentPosition().then((position) => {
    //     this.regData.coordinates[0] = position.coords.latitude;
    //     this.regData.coordinates[1] = position.coords.longitude;
    // });

    
    this.userService.register(this.regData).then((result) => {
      this.loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
    // this.navCtrl.setRoot(HomePage);
  }

  login() {
    // add your check auth here
    this.navCtrl.setRoot(LoginPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Registering...'
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
