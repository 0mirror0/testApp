import { Component } from '@angular/core';
import { IonicPage, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';
// import { Platform } from 'ionic-angular';
// import { BackButtonService } from '../../services/backButton.service';
// import { HttpProvider } from '../../providers/http/http';
// import { AppConfig } from '../../app/app.config';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public isRemember: boolean = false;
  public isShow: boolean = false;
  public passVale: string;

  constructor(
    public modalCtrl: ModalController,
    // private backButtonService: BackButtonService,
    // private platform: Platform,
    public storage: Storage,
    public toastCtrl: ToastController,
    // private httpProvider: HttpProvider
  ) {
    // this.platform.ready().then(() => {
    //   this.backButtonService.registerBackButtonAction(null);
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
    this.storage.get("USER_INFO").then(
      (value: string) => {
        let isRemember = value ? JSON.parse(value).isRemember : false;
        if(isRemember) {
          this.passVale = JSON.parse(value).password;
        } else {
          this.passVale = null;
        }
      }
    );
    
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    // if (username.value.length == 0) {
    //   alert("请输入账号！")
    // } else if (password.value.length == 0) {
    //   alert("请输入密码！")
    // } else if(username.value !== 'admin') {
    //   alert("账号不正确！")
    // } else if(password.value !== '123456') {
    //   alert("密码不正确！")
    // } else if (username.value == 'admin' && password.value == '123456') {
    //   let userInfo: string = '用户名:' + username.value + '密码:' + password.value;
    //   let modal = this.modalCtrl.create(TabsPage);
    //   modal.present();
    // alert(userInfo);
    //   console.log(userInfo);

    // }
    if (username.value.length === 0) {
      this.showToast("bottom", "请输入");
      return false;
    }

    if (password.value.length === 0) {
      this.showToast("bottom", "请输入密码");
      return false;
    }

    // 记录用户是否记住密码
    let data = { username: username.value, password: password.value, isRemember: this.isRemember };

    // 储存用户信息
    this.storage.remove("USER_INFO");
    this.storage.set("USER_INFO", JSON.stringify(data));

    // 界面跳转
    let modal = this.modalCtrl.create(TabsPage, data);
    modal.present();
  }

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  // logIn(username: HTMLInputElement, password: HTMLInputElement) {
  //   let pa = {
  //     username: 'admin',
  //     password: '123456'
  //   }
  //   console.log(pa);
  //   this.httpProvider.post('/login', pa).subscribe((resp: any) => {
  //     console.log('登录成功', resp);
  //     AppConfig.token = resp.result.token  // 登录成功的token存起来
  //   }, error => {
  //     console.log('登录失败');
  //   })
  // }

}
