import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiYouCoinPage } from './mi-you-coin';

@NgModule({
  declarations: [
    MiYouCoinPage,
  ],
  imports: [
    IonicPageModule.forChild(MiYouCoinPage),
  ],
})
export class MiYouCoinPageModule {}
