import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { PlatformConfig } from '@angular/platform-server';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav') nav!: ElementRef<HTMLElement>;
  @ViewChild('toggleBtn') toggleBtn!: ElementRef<HTMLElement>;
  isOpen: boolean = false;
  isAnimating: boolean = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: PlatformConfig,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.pipe(delay(200)).subscribe((event) => {
      if (event instanceof NavigationEnd) this.closeNav();
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', () => {
        if (innerWidth >= 1024) this.closeNav();
      });
    }
  }

  toggleNav() {
    const toggleBtn: HTMLElement = this.toggleBtn.nativeElement as HTMLElement;
    const nav: HTMLElement = this.nav.nativeElement as HTMLElement;

    if (!this.isOpen && !this.isAnimating) {
      this.isAnimating = true;
      nav.style.display = 'flex';
      this.document.body.classList.add('noscroll');

      setTimeout(() => {
        toggleBtn.classList.add('opened');
        nav.style.right = '0';
        this.isAnimating = false;
        this.isOpen = true;
      }, 300);
    } else this.closeNav();
  }

  closeNav() {
    if (this.isOpen && !this.isAnimating) {
      this.isAnimating = true;
      const toggleBtn: HTMLElement = this.toggleBtn
        .nativeElement as HTMLElement;
      const nav: HTMLElement = this.nav.nativeElement as HTMLElement;

      if (this.document.body.classList.contains('noscroll')) {
        this.document.body.classList.remove('noscroll');
      }

      if (toggleBtn.classList.contains('opened')) {
        toggleBtn.classList.remove('opened');
      }

      nav.style.right = '-100vw';

      setTimeout(() => {
        nav.style.display = 'none';
        this.isAnimating = false;
        this.isOpen = false;
      }, 300);
    }
  }
}
