import { Component, ViewChild } from '@angular/core';
import { Platform, Tabs, NavController } from 'ionic-angular';
import { BackButtonService } from '../../services/backButton.service';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MyTabPage } from '../my-tab/my-tab';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tabRoots: Object[];

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;

  // set some user information on chatParams
  chatParams = {
    user1: 'admin',
    user2: 'ionic'
  };
  constructor(
    public navCtrl: NavController,
    public backButtonService: BackButtonService,
    private platform: Platform
  ) {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '首页',
        tabIcon: 'home',
        rootParams: 'homeParam'
      },
      {
        root: AboutPage,
        tabTitle: '动态',
        tabIcon: 'ios-compass-outline',
        rootParams: 'aboutParam'
      },
      {
        root: ContactPage,
        tabTitle: '消息',
        tabIcon: 'ios-chatboxes-outline',
        rootParams: 'contactParam'
      },
      {
        root: MyTabPage,
        tabTitle: '我的',
        tabIcon: 'ios-ionitron-outline',
        rootParams: 'myTabParam'
      }
    ]

    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });

    // 解决跳转到 tabs 页再回登录页会无限进入，push 后再删除之前页面即可/然后事实情况恰恰相反
    // this.navCtrl.push(TabsPage).then(() => {
    //   const starIndex: any = this.navCtrl.getActive().index - 1;
    //   this.navCtrl.remove(starIndex, 1);
    // })

  }

}
