import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.svg',
  styles: [
    `
      tspan { white-space: pre }
      .title { font-size: 64px; font-family: "Arial"; text-anchor: end }
      .subtitle { font-size: 26px; font-family: "Arial"; text-anchor: end }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {
  @Input() title = 'Lorem Ipsum';
  @Input() subtitle = 'Dolor sit amet';
  @Input() backgroundColor = 'black';
  @Input() foregroundColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
