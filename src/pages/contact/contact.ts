import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  Date: any;
  nowTime: any;
  list: any = [];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
    ) {
    this.Date = new Date();;
    this.nowTime = this.formatDate(this.Date, 'hh:mm');
    this.list = [1,2,3,4,5,6,7,8,9,0];

  }
  // 消息
  information() {
    const toast = this.toastCtrl.create({
      message: '别找了，是没有消息的!',
      duration: 3000
    });
    toast.present();
  }

  // 回复消息
  replyInformation() {
    const toast = this.toastCtrl.create({
      message: '别想了，作者还差点意思，所以他还没有搞定!',
      duration: 3000
    });
    toast.present();
  }

  loadData(event) {
    setTimeout(() => {

      // event.target.complete(); // 告诉ion-finite-scroll数据已经更新完成  不加这句话会卡死，因为它不会无限加载 上拉的时候不会数据不会加载

      // 禁用ion-finite-scroll
      // if(this.list.length > 40) {
      //   event.target.disabled = true;
      // }
    }, 3000)
  }

  // 时间格式转换
  formatDate(date, format = 'yyyy-MM-dd') {
    var v = "";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var weekDay = date.getDay();
    var ms = date.getMilliseconds();
    var weekDayString = "";
    if (weekDay == 1) {
      weekDayString = "星期一";
    } else if (weekDay == 2) {
      weekDayString = "星期二";
    } else if (weekDay == 3) {
      weekDayString = "星期三";
    } else if (weekDay == 4) {
      weekDayString = "星期四";
    } else if (weekDay == 5) {
      weekDayString = "星期五";
    } else if (weekDay == 6) {
      weekDayString = "星期六";
    } else if (weekDay == 7) {
      weekDayString = "星期日";
    }
    v = format;
    //Year
    v = v.replace(/yyyy/g, year);
    v = v.replace(/YYYY/g, year);
    v = v.replace(/yy/g, (year + "").substring(2, 4));
    v = v.replace(/YY/g, (year + "").substring(2, 4));
    //Month
    var monthStr = ("0" + month);
    v = v.replace(/MM/g, monthStr.substring(monthStr.length - 2));
    //Day
    var dayStr = ("0" + day);
    v = v.replace(/dd/g, dayStr.substring(dayStr.length - 2));
    //hour
    var hourStr = ("0" + hour);
    v = v.replace(/HH/g, hourStr.substring(hourStr.length - 2));
    v = v.replace(/hh/g, hourStr.substring(hourStr.length - 2));
    //minute
    var minuteStr = ("0" + minute);
    v = v.replace(/mm/g, minuteStr.substring(minuteStr.length - 2));
    //Millisecond
    v = v.replace(/sss/g, ms);
    v = v.replace(/SSS/g, ms);
    //second
    var secondStr = ("0" + second);
    v = v.replace(/ss/g, secondStr.substring(secondStr.length - 2));
    v = v.replace(/SS/g, secondStr.substring(secondStr.length - 2));
    //weekDay
    v = v.replace(/E/g, weekDayString);
    return v;
  }
}

