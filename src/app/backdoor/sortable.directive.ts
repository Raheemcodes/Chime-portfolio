import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Sortable, SortableStopEvent } from '@shopify/draggable';

@Directive({
  selector: '[fireDrop]',
})
export class SortableDirective implements AfterViewInit {
  @Input() data!: any[];
  sortable!: Sortable;

  // @Output() start = new EventEmitter();
  // @Output() sort = new EventEmitter();
  // @Output() sorted = new EventEmitter();
  @Output() stop = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.sortable = new Sortable(this.el.nativeElement, { draggable: 'li' });

    this.sortable.on('sortable:stop', (e) => this.handleStop(e));
  }

  handleStop(e: SortableStopEvent) {
    console.log(e);
    const { newIndex, oldIndex } = e;
    const next = this.data;
    const moved = next.splice(oldIndex, 1);
    next.splice(newIndex, 0, moved[0]);

    this.stop.emit(next);
  }
}
