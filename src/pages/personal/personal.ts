import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ModifyPage } from '../modify/modify';
/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  // @ViewChild(Slides) slides: Slides;
  Swiper: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    // this.slides.
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }
  // ionViewWillEnter() {
  //   this.slides.startAutoplay();
  // }
  // ionViewWillLeave() {
  //   this.slides.stopAutoplay();
  // }

  // 编辑
  editor() {
    this.navCtrl.push(ModifyPage);
  }

  // 游戏展示
  wantPlay() {
    const toast = this.toastCtrl.create({
      message: '想玩？自己去官网下载去！',
      duration: 3000
    });
    toast.present();
  }

  // 返回上一页
  backPage() {
    this.navCtrl.pop();
  }

}
