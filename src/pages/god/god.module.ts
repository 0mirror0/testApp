import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GodPage } from './god';

@NgModule({
  declarations: [
    GodPage,
  ],
  imports: [
    IonicPageModule.forChild(GodPage),
  ],
})
export class GodPageModule {}
