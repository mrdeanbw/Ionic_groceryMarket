import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { SERVER_URL } from "./config";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

let userURL = SERVER_URL + 'user';

@Injectable()

export class UserService {

    constructor(public http: Http){}

    login(credentials){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.post(userURL + '/login', JSON.stringify(credentials), {headers: headers})
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    register(data){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.post(userURL + '/register', JSON.stringify(data), {headers: headers})
            .subscribe(res => {
                console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

}