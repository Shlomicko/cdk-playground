import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { SbToolTipComponent } from './sb-tool-tip.component';

@Directive({
  selector: '[sbToolTip]',
})
export class SBToolTipDirective implements OnInit {
  @Input('sbToolTip') text = '';

  private overlayRef!: OverlayRef;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    const position = this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef)
    .withPositions([{
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }]);
    this.overlayRef = this.overlay.create({positionStrategy: position});
  }

  @HostListener('mouseenter')
  show() {
    const toolTipPortal = new ComponentPortal(SbToolTipComponent);

    const toolTipRef: ComponentRef<SbToolTipComponent> =
      this.overlayRef.attach(toolTipPortal);

    toolTipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef?.detach();
  }
}
