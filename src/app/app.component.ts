import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="centerDiv">
    <app-logo
      [title]="title"
      [backgroundColor]="'red'"
      [foregroundColor]="foregroundColor"
    ></app-logo> 
    <app-body></app-body>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Best Logo';
  foregroundColor = 'black'

  constructor() {
    setTimeout(() => {
      this.title = 'My Best Logo';
      this.foregroundColor = 'white';
    }, 3000);
  }
}
