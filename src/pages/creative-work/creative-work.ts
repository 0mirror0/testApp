import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CreativeWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creative-work',
  templateUrl: 'creative-work.html',
})
export class CreativeWorkPage {
  menuNav: any;

  constructor
    (public navCtrl: NavController,
      public navParams: NavParams,
      public toastCtrl: ToastController
    ) {
    this.menuNav = [
      {
        icon: 'ios-paper',
        name: '投稿管理',
        id: '00951'
      },
      {
        icon: 'ios-briefcase',
        name: '创作商城',
        id: '00952'
      },
      {
        icon: 'ios-filing',
        name: '提现',
        id: '00953'
      },
      {
        icon: 'ios-photos',
        name: '我的钱包',
        id: '00954'
      },
      {
        icon: 'logo-hackernews',
        name: '申请认证',
        id: '00955'
      },
      {
        icon: 'ios-map',
        name: '创作周边',
        id: '00956'
      },
      {
        icon: 'ios-walk',
        name: '作者招募',
        id: '00957'
      },
      {
        icon: 'ios-alert',
        name: '问题反馈',
        id: '00958'
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreativeWorkPage');
  }

  goSee() {
    const toast = this.toastCtrl.create({
      message: '想进去看？那就等我什么时候把其它的大体搞定再说吧！好辛苦，一不小心就写上头，越写越兴奋，不过未来这东西，谁说的准呢？',
      duration: 3000,
      position: 'top'
    });
    toast.present();}

  goWant() {
    const toast = this.toastCtrl.create({
      message: '想知道更多？还是别了吧！我自己都不知道，又怎么告诉你呢？',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  goActivity() {
    const toast = this.toastCtrl.create({
      message: '想看活动？奉劝你一句，收手吧！因为这都不知道是什么时候的了，早过了？',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
