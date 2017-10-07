import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { SERVER_URL } from "./config";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()

export class ShopService {

    constructor(public http: Http){}

    getShopName(zipcode){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.get(SERVER_URL + 'api/shops/grocery/' + zipcode, {headers: headers})
            .subscribe(res => {
                resolve(res.json().shops);
            }, (err) => {
                reject(err);
            });
        });
    }

    getCategories(shopid){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.get(SERVER_URL + 'api/shop/' + shopid + '/categories', {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        })
    }

    getSubCategories(catid){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.get(SERVER_URL + 'api/subcategory/category/' + catid, {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        })
    }

    getItems(shopid, catid, subcatid){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.get(SERVER_URL + 'api/shop/' + shopid + '/items?category=' + catid + '&subcategory=' + subcatid, {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        })
    }
}