import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the QuestionnairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html',
})
export class QuestionnairePage {
  sex: any;
  ifKnow: any;
  channel: any;
  play: any;
  role: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnairePage');
  }

  handleModelChange() {
    console.log(this.sex);
    console.log(this.ifKnow);
    console.log(this.channel);
    console.log(this.play);
    console.log(this.role);
  }

  submitQuestionnaire() {
    if (
      this.sex !== undefined &&
      this.ifKnow !== undefined &&
      this.channel !== undefined &&
      this.play !== undefined &&
      this.role !== undefined
    ) {
      console.log('已提交！')

      const toast = this.toastCtrl.create({
        message: '呼呀！提交成功了！',
        duration: 3000
      });
      toast.present();

      setTimeout(() => {

        const toastAgain = this.toastCtrl.create({
          message: '怎么可能？我都没写完，你怎么提交成功的啊？是吧？',
          duration: 3000
        });
        toastAgain.present();
      }, 3000)
    };
  }

}
