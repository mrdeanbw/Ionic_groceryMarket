import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from 'ionic-angular';

@Injectable()

export class LoadingService {
    public loading: any;

    constructor(public loadingCtrl: LoadingController, private toastCtrl: ToastController ){}

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