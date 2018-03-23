import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  numerek: any;

  constructor(public navCtrl: NavController, public http: HttpClient) {

   this.numerek = "ładuję dane..."

    this.http.get('http://10.32.70.219:801').subscribe(data => {
          console.log(data)
          this.numerek = data.numerek;
        }, err => {
          console.log(err);
        });

  }

}
