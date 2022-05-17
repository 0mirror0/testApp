import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { LanguagePage } from '../language/language';
import { PersonalPage } from '../personal/personal';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  username: string;
  pushPersonal: any;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public storage: Storage
  ) {
    this.pushPersonal = PersonalPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    this.storage.get("USER_INFO").then(
      (value: string) => {
        this.username = JSON.parse(value).username;
      }
    );
    
  }

  logOut() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  setLanguage() {
    this.navCtrl.push(LanguagePage);
  }

}
