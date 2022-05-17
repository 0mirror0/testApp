import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the MiYouCoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-you-coin',
  templateUrl: 'mi-you-coin.html',
})
export class MiYouCoinPage {
  relationship: string = "task";

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl: ToastController
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiYouCoinPage');
  }

  // 获取记录
  record() {
    const toast = this.toastCtrl.create({
      message: '有没有你不知道吗？还看记录？有吗？',
      duration: 3000
    });
    toast.present();
  }

  // 兑换中心
  exchange() {
    const toast = this.toastCtrl.create({
      message: '看到那根儿萝卜木有？哪里来的米游币？更别说兑换了！',
      duration: 3000
    });
    toast.present();
  }
  
  // 签到
  Sign() {
    const toast = this.toastCtrl.create({
      message: '别签到了，其实我自己也想签到，但是...',
      duration: 3000
    });
    toast.present();
  }

  // 浏览
  browse() {
    const toast = this.toastCtrl.create({
      message: '你想看啥呀？自己找去！',
      duration: 3000
    });
    toast.present();
  }

  // 点赞
  pretty() {
    const toast = this.toastCtrl.create({
      message: '感谢感谢感谢！你的好意我心领了！',
      duration: 3000
    });
    toast.present();
  }

  // 分享
  share() {
    const toast = this.toastCtrl.create({
      message: '就这你就打算分享了？感谢贵人看得起我，在下不胜感激！',
      duration: 3000
    });
    toast.present();
  }
  
  // 绑定游戏角色
  playRole() {
    const toast = this.toastCtrl.create({
      message: '我也想绑定啊，奈何能力有其限！',
      duration: 3000
    });
    toast.present();
  }
  
  // 完成实名认证
  realName() {
    const toast = this.toastCtrl.create({
      message: '我丢，这个还是算了吧！我怕出问题找我！',
      duration: 3000
    });
    toast.present();
  }
  
  // 修改个性签名
  autograph() {
    const toast = this.toastCtrl.create({
      message: '似乎这个可以有，看我后面怎么搞吧！',
      duration: 3000
    });
    toast.present();
  }

  // 米游币活动
  activity() {
    const toast = this.toastCtrl.create({
      message: '这三个只是凑个数的，不然空着多难看呀！',
      duration: 3000
    });
    toast.present();
  }

}
