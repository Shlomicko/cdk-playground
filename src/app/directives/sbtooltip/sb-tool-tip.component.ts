import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sb-tool-tip',
  template: `{{text}}`,
})
export class SbToolTipComponent {

  @Input() text = '';

}
