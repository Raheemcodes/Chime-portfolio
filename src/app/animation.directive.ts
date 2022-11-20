import {
  animate,
  AnimationBuilder,
  AnimationMetadata,
  style,
} from '@angular/animations';
import { Directive, Input, ElementRef, OnInit } from '@angular/core';

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
  @Input('aray-opacity') opacity!: string;

  constructor(private elRef: ElementRef, private builder: AnimationBuilder) {}

  ngOnInit(): void {
    this.trigger();
  }

  trigger() {
    let animation: AnimationMetadata[] = [];

    if (this.arayAnimate == 'fadeIn') animation = this.fadeIn();

    const factory = this.builder.build(animation);
    const player = factory.create(this.elRef.nativeElement);

    player.play();
  }

  fadeIn(): AnimationMetadata[] {
    return [
      style({
        opacity: this.opacity || '0',
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
}
