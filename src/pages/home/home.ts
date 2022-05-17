// import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { BadgePage } from '../badge/badge';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  computerGame: string = 'puppies'; // segment默认选中
  pet: any;
  data: any;
  original: any;
  menDe: any;
  liYue: any;
  daoQi: any;
  lol: any;
  hero: any;
  equipment: any;
  story: any;
  rumor: any;
  yuanShanDisAble: boolean = true;
  LOLDisAble: boolean = false;


  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
  ) {

    this.pet = [
      {
        name: 'original',
        story: {
          name: '故事',
          content: '稻妻的八酝岛中，有着一颗硕大的蛇头，周围电闪雷鸣的时候，给人一种特别的神秘感。根据背景故事的描述，这是原神中大蛇的遗骸，因为和雷神的一场决战，所以被一刀斩杀。这会给人一种错觉，认为大蛇是反派角色，而雷神为了维护自己的统治，所以才铲除了这个祸害。很长的一段时间里，演说家也是这么认为的，可是在看完“远海夷地的金枝”中的描述，才发现自己想得有些简单。魔神战争打败之后，大蛇逃跑的过程中，进入了名为“暗之外海”的地方，也就是现在稻妻存在的区域。此时的大蛇，看到了这里的弃民，一天过得浑浑噩噩的。可能是瞬间的念头，便决定了去守护他们，并被称之为“海祇大御神”。原本想要逃离，但却因为这些弃民，所以留在了不该存在的世界中。直到被雷神一刀斩落，才在一瞬间消失，当时被大蛇所守护的弃民，其实就是现在反抗军的成员。'
        },
        rumor: {
          name: '谣言',
          content: '为了庆祝原神上线一周年，周年庆的活动是必须存在的，假如做不到这一点的话，就会缺少一些归属感。以此为基础，出现了很多的“谣言”，因为版本暂未上线，所以我们暂且这么认为。其中的一个观点，认为到时候的首充，将会迎来重置的机会。顾名思义，如果你的首充双倍已经用掉，下一次就会有机会还原。'
        },
        // 蒙德
        menDe: [
          {
            image: 'https://img0.baidu.com/it/u=57407592,1311363517&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=324',
            name: '优菈',
            id: '011'
          },
          {
            image: 'https://img1.baidu.com/it/u=2666643763,3882688616&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=568',
            name: '阿贝多',
            id: '012'
          },
          {
            image: 'https://img2.baidu.com/it/u=2728649468,3215569310&fm=253&fmt=auto&app=120&f=JPEG?w=935&h=800',
            name: '可莉',
            id: '013'
          },
          {
            image: 'https://img0.baidu.com/it/u=4090681923,2504818877&fm=253&fmt=auto&app=138&f=PNG?w=816&h=500',
            name: '莫娜',
            id: '014'
          },
          {
            image: 'https://img2.baidu.com/it/u=117339014,3083150430&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=347',
            name: '琴',
            id: '015'
          },
          {
            image: 'https://img1.baidu.com/it/u=2431663883,1659058058&fm=253&fmt=auto&app=138&f=PNG?w=795&h=500',
            name: '迪卢克',
            id: '016'
          },
          {
            image: 'https://img2.baidu.com/it/u=1587176446,1471935036&fm=253&fmt=auto&app=138&f=JPEG?w=960&h=483',
            name: '温迪',
            id: '017'
          },
        ],
        // 璃月
        liYue: [
          {
            image: 'https://img2.baidu.com/it/u=1157250860,2954987147&fm=253&fmt=auto&app=120&f=JPEG?w=1010&h=500',
            name: '申鹤',
            id: '0211'
          },
          {
            image: 'https://img2.baidu.com/it/u=1133603165,3920968557&fm=253&fmt=auto&app=120&f=JPEG?w=1356&h=800',
            name: '胡桃',
            id: '0212'
          },
          {
            image: 'https://img0.baidu.com/it/u=807194469,1584894001&fm=253&fmt=auto&app=138&f=JPEG?w=904&h=500',
            name: '达达利亚--至冬',
            id: '0213'
          },
          {
            image: 'https://img2.baidu.com/it/u=262548770,641959130&fm=253&fmt=auto&app=138&f=JPEG?w=817&h=500',
            name: '钟离',
            id: '0214'
          },
          {
            image: 'https://img0.baidu.com/it/u=2997314854,3495643959&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=369',
            name: '魈',
            id: '0215'
          },
          {
            image: 'https://img2.baidu.com/it/u=2872059716,3294572164&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=766',
            name: '甘雨',
            id: '0216'
          },
          {
            image: 'https://img0.baidu.com/it/u=218537849,3095225702&fm=253&fmt=auto&app=138&f=JPEG?w=782&h=500',
            name: '刻晴',
            id: '0217'
          },
          {
            image: 'https://img0.baidu.com/it/u=1115912933,2830410859&fm=253&fmt=auto&app=138&f=JPEG?w=382&h=500',
            name: '七七',
            id: '0218'
          },
        ],
        // 稻妻
        daoQi: [
          {
            image: 'https://img1.baidu.com/it/u=3546902682,4177739876&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=557',
            name: '八重神子',
            id: '02121'
          },
          {
            image: 'https://img2.baidu.com/it/u=249674567,1079320790&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=722',
            name: '神里绫人',
            id: '02122'
          },
          {
            image: 'https://img2.baidu.com/it/u=341622674,3123475391&fm=253&fmt=auto&app=120&f=JPEG?w=583&h=500',
            name: '荒泷一斗',
            id: '02123'
          },
          {
            image: 'https://img1.baidu.com/it/u=3742095536,280972069&fm=253&fmt=auto&app=138&f=PNG?w=600&h=500',
            name: '雷电将军',
            id: '02124'
          },
          {
            image: 'https://img2.baidu.com/it/u=3351581895,791756441&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=529',
            name: '神里绫华',
            id: '02125'
          },
          {
            image: 'https://img0.baidu.com/it/u=26962990,1429852302&fm=253&fmt=auto&app=120&f=JPEG?w=1531&h=768',
            name: '珊瑚宫心海',
            id: '02126'
          },
          {
            image: 'https://img2.baidu.com/it/u=4074772081,2881712618&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500',
            name: '枫原万叶',
            id: '02127'
          },
          {
            image: 'https://img0.baidu.com/it/u=2558366850,2333615115&fm=253&fmt=auto&app=120&f=JPEG?w=840&h=473',
            name: '宵宫',
            id: '02128'
          },
        ],
      },
      {
        name: 'lol',
        // 英雄
        hero: [
          {
            name: '黑暗之女',
            image: 'https://game.gtimg.cn/images/lol/act/img/champion/Annie.png',
            id: '02131'
          },
          {
            name: '狂战士',
            image: 'https://game.gtimg.cn/images/lol/act/img/champion/Olaf.png',
            id: '02132'
          },
          {
            name: '正义巨像',
            image: 'https://game.gtimg.cn/images/lol/act/img/champion/Galio.png',
            id: '02133'
          },
          {
            name: '卡牌大师',
            image: 'https://game.gtimg.cn/images/lol/act/img/champion/TwistedFate.png',
            id: '02134'
          },
          {
            name: '德邦总管',
            image: 'https://game.gtimg.cn/images/lol/act/img/champion/XinZhao.png',
            id: '02135'
          },
          {
            name: '无畏战车',
            image: 'https://game.gtimg.cn/images/lol/act/img/champion/Urgot.png',
            id: '02136'
          },
          {
            name: '诡术妖姬',
            image: 'https://game.gtimg.cn/images/lol/act/img/champion/Leblanc.png',
            id: '02137'
          },
        ],
        // 装备
        equipment: [
          {
            name: '岚切',
            image: 'https://img.sxsme.com.cn/uploadimg/ico/2022/0128/1643350154358402.jpg',
            id: '02141'
          },
          {
            name: '疾射火炮',
            image: 'https://img.sxsme.com.cn/uploadimg/ico/2022/0127/1643273619955490.jpg',
            id: '02142'
          },
          {
            name: '夜之锋刃',
            image: 'https://img.sxsme.com.cn/uploadimg/ico/2022/0212/1644656190195900.jpg',
            id: '02143'
          },
          {
            name: '亡者的板甲',
            image: 'https://img.sxsme.com.cn/uploadimg/ico/2022/0212/1644655533238724.jpg',
            id: '02144'
          },
          {
            name: '米凯尔的祝福',
            image: 'https://img.sxsme.com.cn/uploadimg/ico/2022/0212/1644654173750237.jpg',
            id: '02145'
          },
          {
            name: '黯影阔剑',
            image: 'https://img.sxsme.com.cn/uploadimg/ico/2022/0211/1644562435889895.jpg',
            id: '02146'
          },
        ]
      }
    ]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.data = this.pet;
    // console.log(this.pet[0].story);

  }

  seeBadge(id: any, name: any, image: any, story, rumor) {
    this.navCtrl.push(BadgePage, {
      id: id,
      name: name,
      image: image,
      story: story,
      rumor: rumor
    });
  }

  // 首次大图片
  shenDisAbleBig() {
    this.yuanShanDisAble = true;
    this.LOLDisAble = false;
  }
  LOLDisAbleBig() {
    this.LOLDisAble = true;
    this.yuanShanDisAble = false;
  }

  // 首页点击
  homePageClick() {
    const toast = this.toastCtrl.create({
      message: '别点了，作者累坏了，让他休息亿会儿',
      duration: 3000,
      position: 'top'
    });
    
    toast.present();
  }

}
