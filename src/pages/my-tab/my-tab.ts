import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// 导入我的主页
import { SettingPage } from '../setting/setting';
import { QuestionnairePage } from '../questionnaire/questionnaire';
import { GamesPage } from '../games/games';
import { CreativeWorkPage } from '../creative-work/creative-work';
import { MiYouCoinPage } from '../mi-you-coin/mi-you-coin';
import { PersonalPage } from '../personal/personal';

/**
 * Generated class for the MyTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-tab',
  templateUrl: 'my-tab.html',
})
export class MyTabPage {
  username: string;
  pushSetting: any;
  pushQuestionnaire: any;
  pushGames: any;
  pushCreativeWork: any;
  pushMiYouCoin: any;
  pushPersonal: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public modalCtrl: ModalController
    ) {
      this.pushSetting = SettingPage;
      this.pushQuestionnaire = QuestionnairePage;
      this.pushGames = GamesPage;
      this.pushCreativeWork = CreativeWorkPage;
      this.pushMiYouCoin = MiYouCoinPage;
      this.pushPersonal = PersonalPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTabPage');

    this.storage.get("USER_INFO").then(
      (value: string) => {
        this.username = JSON.parse(value).username;
      }
    );
  }

}
