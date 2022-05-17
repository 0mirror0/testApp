import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// 二维码扫描仪
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-scanner',
    templateUrl: 'scanner.html',
})
export class ScannerPage {
    light: boolean;// 判断闪光灯
    frontCamera: boolean; // 判断摄像头

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private qrScanner: QRScanner
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ScannerPage');

        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);

                        this.qrScanner.scan();
                        this.qrScanner.show(); // hide camera preview  透明
                        // this.qrScanner.hide(); // hide camera preview  不透明
                        scanSub.unsubscribe(); // stop scanning
                    });

                    this.qrScanner.show();
                } else if (status.denied) {
                    alert("获取权限失败");
                } else {
                    alert("没有权限");
                }
            })
            .catch((e: any) => {
                console.log("调用扫描仪错误", e);// 没有获得权限就报错
            })
    }

    ionViewDidEnter() {

        // (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');

        // 页面可见时才执行
        this.showCamera(); // 开始透明化ion-app
    }

    showCamera() {
        // 写在全局样式表中，对ion-app进行透明化
        (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
    }

    hideCamera() {
        this.qrScanner.hide();// 需要关闭扫描，否则相机一直开着
        // 取消ionic-app透明化
        (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    }

    ionViewWillLeave() {
        this.qrScanner.hide();// 需要关闭扫描，否则相机一直开着
        this.hideCamera(); // 离开页面也要关闭相机调用
    }

    /**
     * 闪光灯控制，默认关闭
     */
    toggleLight() {
        if (this.light) {
            this.qrScanner.disableLight();
        } else {
            this.qrScanner.enableLight();
        }
        this.light = !this.light;
    }

    /**
     * 前后摄像头互换
     */
    toggleCamera() {
        if (this.frontCamera) {
            this.qrScanner.useBackCamera();
        } else {
            this.qrScanner.useFrontCamera();
        }
        this.frontCamera = !this.frontCamera;
    }

}
