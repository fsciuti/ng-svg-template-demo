import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-icon]',
  templateUrl: './icon.component.svg',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  @Input() fill = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
