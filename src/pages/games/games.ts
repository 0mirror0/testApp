import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  public playGame: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');

    this.playGame = [
      {
        image: 'https://imgsa.baidu.com/forum/pic/item/04a3a72bd40735fa4eed3ed389510fb30e2408f2.jpg',
        name: '原神',
        introduce: '这款游戏是上海米哈游公司制作并发行的一款高自由度冒险类游戏,游戏的世界名叫“提瓦特”,玩家作为一名“旅行者”来到这个世界去进行冒险、探索。'
      },
      {
        image: 'https://imgsa.baidu.com/forum/pic/item/d52a2834349b033b8b764a8317ce36d3d439bde9.jpg',
        name: '崩坏学园2',
        introduce: '这是一款2D横版射击游戏'
      },
      {
        image: 'https://hiphotos.baidu.com/fex/%70%69%63/item/03087bf40ad162d9e08b50ce1ddfa9ec8b13cdfe.jpg',
        name: '崩坏学园3',
        introduce: '是一款大型的多人在线3D角色扮演动作游戏'
      },
      {
        image: 'https://hiphotos.baidu.com/fex/%70%69%63/item/d1a20cf431adcbefd66e8ce0a0af2edda2cc9ffa.jpg',
        name: ' 龙之谷',
        introduce: 'S级宠物,s级套装都在这里'
      },
      {
        image: 'https://hiphotos.baidu.com/fex/%70%69%63/item/b17eca8065380cd729193209ad44ad34588281cb.jpg',
        name: '梦幻诛仙',
        introduce: '神兽,魔兽尽这里'
      },
      {
        image: 'https://hiphotos.baidu.com/fex/%70%69%63/item/d1160924ab18972b6feb2c2deacd7b899f510a07.jpg',
        name: '倩女幽魂',
        introduce: '回归玩家来了解一下!'
      },
      {
        image: 'https://t10.baidu.com/it/u=440092962,605707649&fm=58',
        name: '奥特曼格斗进化4',
        introduce: '奥特曼能打怪兽很幸福'
      },
      {
        image: 'https://t12.baidu.com/it/u=1345148672,344672330&fm=58',
        name: '我的世界2',
        introduce: '我的世界的升级版本'
      },
      {
        image: 'https://t12.baidu.com/it/u=3716685914,1900525374&fm=58',
        name: '奥特曼游戏',
        introduce: '人们心中的大英雄'
      },
      {
        image: 'https://t11.baidu.com/it/u=4033681918,3991786657&fm=58',
        name: '地铁酷跑',
        introduce: '酷跑类动作游戏'
      },
      {
        image: 'https://t12.baidu.com/it/u=4077344594,1544686535&fm=58',
        name: '植物大战僵尸中文版2',
        introduce: '极富策略性的小游戏'
      }
    ]

  }

  goDownload() {
    const toast = this.toastCtrl.create({
      message: '别白费力气了，还是去官网上自己查吧！',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
