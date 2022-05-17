import { Component } from '@angular/core';

/**
 * Generated class for the MyBadgeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-badge',
  templateUrl: 'my-badge.html'
})
export class MyBadgeComponent {

  text: string;

  constructor() {
    console.log('Hello MyBadgeComponent Component');
    this.text = 'Hello World';
  }

}
