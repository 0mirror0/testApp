import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyBadgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-badge',
  templateUrl: 'my-badge.html',
})
export class MyBadgePage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
    // console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBadgePage');

  }

}
