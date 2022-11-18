import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true,
})
export class ClickDirective implements OnInit {
  @Input() appClick: boolean | '' = false;
  clickElement!: HTMLDivElement | null;
  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.overflow') overflow = 'hidden';
  isAnimating: boolean = false;
  timeout: any;

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {}

  createElement(event: WheelEvent) {
    this.clickElement = this.document.createElement('div');
    this.clickElement.classList.add('click-background');
    this.renderer.setStyle(
      this.clickElement,
      'top',
      `${event.offsetY / 16}rem`
    );
    this.renderer.setStyle(
      this.clickElement,
      'left',
      `${event.offsetX / 16}rem`
    );
    this.elRef.nativeElement.appendChild(this.clickElement);
  }

  @HostListener('click', ['$event']) click(event: WheelEvent) {
    if (!this.isAnimating) {
      this.isAnimating = true;

      this.createElement(event);
      this.renderer.setStyle(
        this.clickElement,
        'transform',
        `scale(${(this.elRef.nativeElement.clientWidth / 32) * 2})`
      );
      this.renderer.setStyle(this.clickElement, 'opacity', '0.5');

      setTimeout(() => {
        this.leave();
      }, 500);
    }
  }
  @HostListener('mouseleave') leave() {
    if (this.clickElement) {
      this.elRef.nativeElement.removeChild(this.clickElement);
      this.clickElement = null;
      this.isAnimating = false;
    }
  }
}
