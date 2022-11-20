import {
  animate,
  AnimationBuilder,
  AnimationMetadata,
  style,
} from '@angular/animations';
import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  HostListener,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';

@Directive({
  selector: '[aray-animate]',
  standalone: true,
})
export class AnimationDirective implements OnInit {
  @Input('aray-animate') arayAnimate: 'fadeIn' | '' = '';
  @Input('aray-duration') duration!: string;
  @Input('aray-delay') delay!: string;
  @Input('aray-easing') easing!: string;
  @Input('aray-offsetX') offsetX!: string;
  @Input('aray-offsetY') offsetY!: string;
  @Input('aray-opacity') opacity!: number;
  hostEl!: HTMLElement;
  observer!: IntersectionObserver;

  constructor(
    elRef: ElementRef,
    private builder: AnimationBuilder,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {
    this.hostEl = elRef.nativeElement;

    if ('IntersectionObserver' in window) this.styleElement();
  }

  ngOnInit(): void {
    this.onload();
  }

  styleElement() {
    this.renderer.setStyle(
      this.hostEl,
      'transform',
      `translate(${this.offsetX || '0'}, ${this.offsetY || '0'})`
    );
    this.renderer.setStyle(this.hostEl, 'opacity', this.opacity || 0);
  }

  trigger() {
    let animation: AnimationMetadata[] = [];

    if (this.arayAnimate == 'fadeIn') animation = this.fadeIn();

    const factory = this.builder.build(animation);
    const player = factory.create(this.hostEl);

    player.play();
    this.observer.unobserve(this.hostEl);

    // Unobserve elements above viewport
  }

  fadeIn(): AnimationMetadata[] {
    return [
      style({
        opacity: this.opacity || 0,
        transform: `translate(${this.offsetX || '0'}, ${this.offsetY || '0'})`,
      }),
      animate(
        `${this.duration || '500ms'} ${this.delay || '100ms'} ${
          this.easing || 'ease-out'
        }`,
        style({ opacity: 1, transform: 'translate(0, 0)' })
      ),
    ];
  }

  onload() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // triggers when animation is in the viewport or enters
            if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
              this.trigger();
            }
          });
        },
        {
          threshold: [0.1],
        }
      );

      // observe only elments within or below viewport
      this.observer.observe(this.hostEl);

      // trigger all elements animation above
      setTimeout(() => {
        if (this.hostEl.getBoundingClientRect().top < 0) {
          this.trigger();
        }
      }, 1);

      // shorten animation delay of element below viewport
      if (this.hostEl.getBoundingClientRect().top >= innerHeight) {
        this.delay = '100ms';
      }
    }
  }
}
