import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

// 引入对应 storage 的文件包
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storage: Storage
  ) {
    

    // 当storage准备就绪之后,判断 USER_INFO 中是否记录登录状态
    // 在 constructor 构造方法中增强逻辑
    storage.ready().then(() => {
      
      storage.get('USER_INFO').then(
        (value: string) => {
          let isRemember = value ? JSON.parse(value).isRemember : false;
          
          if (isRemember) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        }
      );
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();// 使用默认状态栏
      splashScreen.hide();
      statusBar.backgroundColorByHexString("fff");
    });
  }

  ionViewDidEnter() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }
}
