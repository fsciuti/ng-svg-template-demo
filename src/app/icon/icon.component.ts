import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-icon]',
  templateUrl: './icon.component.svg',
  styles: [
  ]
})
export class IconComponent implements OnInit {
  @Input() fill = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
