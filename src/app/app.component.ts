import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="centerDiv">
    <app-logo
      [title]="'Best Logo'"
      [backgroundColor]="'red'"
      [foregroundColor]="'black'"
    ></app-logo> 
    <app-body></app-body>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-svg-template';
}
