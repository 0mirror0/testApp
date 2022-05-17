import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, PopoverController } from 'ionic-angular';
import { MyBadgePage } from '../my-badge/my-badge';

/**
 * Generated class for the BadgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badge',
  templateUrl: 'badge.html',
})
export class BadgePage {
  data: any;
  light: any;
  primary: any;
  secondary: any;
  danger: any;
  dark: any;
  bGroundColor: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController
  ) {
    this.data = navParams.data;
    // console.log(this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgePage');
  }

  // 行动表
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: '请做出你的选择',
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            console.log('别白费力气了，删除不了！');
          }
        }, {
          text: '看看',
          handler: () => {
            alert('还想干嘛？看看就行了！');
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消！');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // 弹出框
  presentPopover(someRumor) {
    const popover = this.popoverCtrl.create( MyBadgePage, {
      data: someRumor
    });
    popover.present();
  }

  // 背景颜色切换
  backLight() {
    this.bGroundColor = '#fff';
  }
  backPrimary() {
    this.bGroundColor = '#488aff';
  }
  backSecondary() {
    this.bGroundColor = '#32db64';
  }
  backDark() {
    this.bGroundColor = '#222';
  }

}
