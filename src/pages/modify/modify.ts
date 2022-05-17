import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ModifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify',
  templateUrl: 'modify.html',
})
export class ModifyPage {
  photoImg: any;
  list: any = [
    { "key": "man", "value": '男', "check": true },
    { "key": "woman", "value": '女', "check": false },
    { "key": "secret", "value": '保密', "check": false }
  ];
  sex: any = { "key": "man", "value": '男', "check": true };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad(): void {
    console.log('ionViewDidLoad ModifyPage');

    // 取
    this.storage.get("USER_IMG").then(
      (value: string) => {
        this.photoImg = value;
        console.log(this.photoImg);

      }
    )
  }

  // 存
  addPhoto(img: any) {

    let image = { img: img }

    // 储存用户信息
    this.storage.remove("USER_IMG");
    this.storage.set("USER_IMG", image);

    
    const toast = this.toastCtrl.create({
      message: '别点了，已经存了！只不过，存和没存没什么区别而已！',
      duration: 3000
    });
    toast.present();
  }

  // 保存
  preserve() {
    const toast = this.toastCtrl.create({
      message: '算了算了，初入门庭。无能为力！',
      duration: 3000
    });
    toast.present();
  }

  // 选择性别信息
  public checkFun(i) {
    let me = this;
    this.list.forEach(function (sex, index, array) {
      if (i == index) {
        sex.check = true;
        me.sex = sex;
      } else {
        sex.check = false
      }
    });
  }

  // 打印获得的性别信息
  public submit() {
    console.log(this.sex);

    
    const toast = this.toastCtrl.create({
      message: '已经提交了哦！',
      duration: 3000
    });
    toast.present();
  }

}
