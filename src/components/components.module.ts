import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyBadgeComponent } from './my-badge/my-badge';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	declarations: [MyBadgeComponent,
    ProgressBarComponent],
	imports: [IonicModule],
	exports: [MyBadgeComponent,
    ProgressBarComponent]
})
export class ComponentsModule {}
