import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// 外入插件
import { Camera } from '@ionic-native/camera';// 相机
import { IonicStorageModule } from '@ionic/storage';// 存储
import { QRScanner } from '@ionic-native/qr-scanner';// 二维码扫描仪
import { Calendar } from '@ionic-native/calendar';// 日历

// http请求
import { HTTP } from '@ionic-native/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { HttpProvider } from '../providers/http/http';
import { httpInterceptorProviders } from '../interceptors/interceptor.config';

// 子页面导入
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { SearchPage } from '../pages/search/search';
import { GodPage } from '../pages/god/god';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { BadgePage } from '../pages/badge/badge';
import { MyBadgePage } from '../pages/my-badge/my-badge';
import { LanguagePage } from '../pages/language/language';
import { MyTabPage } from '../pages/my-tab/my-tab';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { GamesPage } from '../pages/games/games';
import { CreativeWorkPage } from '../pages/creative-work/creative-work';
import { MiYouCoinPage } from '../pages/mi-you-coin/mi-you-coin';
import { PersonalPage } from '../pages/personal/personal';
import { ModifyPage } from '../pages/modify/modify';
import { ScannerPage } from '../pages/scanner/scanner';

import { TabsPage } from '../pages/tabs/tabs';

// 组件导入
import { ComponentsModule } from '../components/components.module';

// 硬件返回键处理
import { BackButtonService } from '../services/backButton.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    SearchPage,
    GodPage,
    LoginPage,
    SettingPage,
    BadgePage,
    MyBadgePage,
    LanguagePage,
    MyTabPage,
    QuestionnairePage,
    GamesPage,
    CreativeWorkPage,
    MiYouCoinPage,
    PersonalPage,
    ModifyPage,
    ScannerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      backButtonText: ''
    }),
    HttpClientModule,
    HttpClientJsonpModule,
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatPage,
    SearchPage,
    GodPage,
    LoginPage,
    SettingPage,
    BadgePage,
    MyBadgePage,
    LanguagePage,
    MyTabPage,
    QuestionnairePage,
    GamesPage,
    CreativeWorkPage,
    MiYouCoinPage,
    PersonalPage,
    ModifyPage,
    ScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackButtonService,
    HTTP,
    HttpProvider,
    httpInterceptorProviders,
    Camera,
    QRScanner,
    Calendar
  ]
})
export class AppModule {}
