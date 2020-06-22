import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
    <p>
      body works!
    </p>
  `,
  styles: [
  ]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
