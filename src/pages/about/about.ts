import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';

// 子页面
import { ScannerPage } from '../scanner/scanner';

// 相机
import { Camera, CameraOptions } from '@ionic-native/camera';
// 日历
import { Calendar } from '@ionic-native/calendar';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import { stringify } from '@angular/core/src/util';
// import { HttpClient } from '@angular/common/http';
// import { Dialogs } from '@ionic-native/dialogs';
// import { HttpProvider } from '../../providers/http/http';
// import { AppConfig } from '../../app/app.config';

// import SwiperCore from 'swiper';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides: Slides;
  // 接受数据用
  listData: Object;
  images: any;
  // 相机
  path: string;
  access_token: string = '';
  pushScanner: any;
  // fileTransfer: FileTransferObject = this.transfer.create();


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private calendar: Calendar
    // private transfer: FileTransfer,
    // private file: File
    // private http: HttpClient,
    // private httpProvider: HttpProvider
  ) {
    this.pushScanner = ScannerPage;

    this.images = [
      'https://img2.baidu.com/it/u=2328371912,2688978079&fm=253&fmt=auto&app=138&f=JPEG?w=701&h=500',
      'https://img0.baidu.com/it/u=1983266342,2489547250&fm=253&fmt=auto&app=138&f=PNG?w=759&h=500',
      'https://img0.baidu.com/it/u=2478747114,879704519&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
      'https://img0.baidu.com/it/u=2474123335,1468878921&fm=253&fmt=auto&app=138&f=JPEG?w=952&h=500',
      'https://img0.baidu.com/it/u=2577368429,337688101&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      'https://img2.baidu.com/it/u=2040577610,945163649&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
      'https://img1.baidu.com/it/u=2931059777,4091221102&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      'https://img1.baidu.com/it/u=3562462949,3823031438&fm=253&fmt=auto&app=138&f=JPEG?w=699&h=500'
    ]

    // this.slides.freeMode = true;
    // this.slides.slidesPerView = "auto";

    // this.dialogs.alert('Hello world')
    //   .then(() => console.log('Dialog dismissed'))
    //   .catch(e => console.log('Error displaying dialog', e));

    // 请求
    // setTimeout(() => {
    //   this.http.get('http://jsonplaceholder.typicode.com/photos', { params: {} })
    //     .subscribe((res: any) => {
    //       this.listData = res.splice(0,20);
    //       console.log(this.listData);
    //     });
    // }, 500);

    // 正式--有cookie验证
    // this.httpProvider.get('jsonplaceholder.typicode.com/photos', {})
    //   .subscribe((resp => {
    //     if (!resp.success) {
    //       return;
    //     }
    //     console.log("返回数据", resp);
    //     this.listData = resp;
    //   }), error => {
    //     console.error(error);
    //   })
  }

  onCamera() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI, // 返回图像格式
      encodingType: this.camera.EncodingType.JPEG, // 编码类型
      mediaType: this.camera.MediaType.PICTURE, // 媒体类型
      saveToPhotoAlbum: true, // 是否保存到相册
      sourceType: this.camera.PictureSourceType.CAMERA, // 是打开相机拍照还是打开相册选择
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert("图片获取失败！");
    });
  }

  // 日历
  onCalendar() {
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => {
        alert(msg);
      },
      (err) => { console.log(err); }
    );
    this.calendar.openCalendar(new Date()).then(
      (msg) => { console.log(msg);},
      (err) => { console.log(err);}
    );
  }

  // onSwiper([swiper]) {
  //   console.log(swiper);

  // }
  // onSlideChange() {
  //   console.log('slide change');

  // }

  // 打开摄像头
  // openCamera() {
  //   const options: CameraOptions = {
  //     quality: 90,// 相片质量 0-100
  //     destinationType: this.camera.DestinationType.DATA_URL,// DATA_URL 是 base64 FILE_URL 是文件路径
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     saveToPhotoAlbum: true, // 是否保存到相册
  //     sourceType: this.camera.PictureSourceType.CAMERA, // 是打开相机拍照还是打开相册选择
  //   }
  //   this.camera.getPicture(options).then((imageData) => {
  //     console.log("got file: " + imageData); //If it's base64
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.path = base64Image; //If it's file URL
  //     // this.path = imageData;
  //     this.upload();
  //   }, (err) => {
  //     alert("获取图片失败！");
  //   });
  // }
  // 文件上传
  // upload() {
  //   const apiPath = "http://192.168.68.124:9090/api/commons/attach?" + stringify({ access_token: this.access_token });
  //   let options: FileUploadOptions = {
  //     fileKey: 'file',
  //     fileName: 'name.jpg', //文件名称
  //     headers: {}, // 如果要传参，写这里
  //     params: {
  //       maxSize: 50000,
  //       modularName: 'CNL',
  //       allowTYpe: 'jpg;png;pdf;doc;xls;xlsx;docx',
  //     }
  //   };
  //   this.fileTransfer.upload(this.path, apiPath, options)
  //     .then((data) => {
  //       console.log(data);
  //     }, (err) => {
  //       console.log(err);
  //     });
  // }
  // 文件下载
  // download() {
  //   const url = "http://192.168.68.124:9090/api/commons/attach?" + stringify({
  //     fileId: 17161,
  //     access_token: this.access_token 
  //   });
  //   this.fileTransfer.download(url, this.file.externalApplicationStorageDirectory + 'Mac.png')
  //     .then((data) => {
  //       console.log('download complete: ' + data.toURL());
  //     }, (err) => {
  //       console.log(err);

  //     })
  // }

}