import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Card, MetaInterface } from './shared.mdel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {}

  setMeta({ title, description, img, path, keywords }: MetaInterface) {
    this.titleService.setTitle(title);

    if (environment.production) {
      this.meta.updateTag({
        name: 'description',
        content: description,
      });
      this.meta.updateTag({
        name: 'keywords',
        content: keywords,
      });
      this.createCard({ title, description, img, path });
    }
  }

  createCard({ title, description, img, path }: Card) {
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: environment.frontendAddress + path,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: title,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: environment.frontendAddress + '/assets/background/' + img,
    });
  }

  navigate(page: string) {
    return of('navigate')
      .pipe(delay(300))
      .subscribe(() => {
        this.router.navigate([page]);
      });
  }

  lazyLoading() {
    let lazyloadImages!: NodeListOf<HTMLElement>;

    if ('IntersectionObserver' in window) {
      lazyloadImages = document.querySelectorAll('.lazy');
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const image = entry.target as any;
              image.src = image.dataset.src;
              image.alt = image.dataset.alt;
              image.classList.remove('lazy');
              imageObserver.unobserve(image);
            }
          });
        },
        {
          rootMargin: '0px 0px 200px 0px',
        }
      );

      lazyloadImages.forEach((image) => {
        imageObserver.observe(image);
      });
    } else {
      let lazyloadThrottleTimeout: any;
      lazyloadImages = document.querySelectorAll('.lazy');

      function lazyload() {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(() => {
          const scrollTop = window.pageYOffset;
          lazyloadImages.forEach((img) => {
            const image: HTMLImageElement = (img as HTMLImageElement)!;

            if (img.offsetTop < window.innerHeight + scrollTop + 200) {
              image.src = image.dataset['src']!;
              image.alt = image.dataset['alt']!;
              image.classList.remove('lazy');
            }
          });
          if (lazyloadImages.length == 0) {
            document.removeEventListener('scroll', lazyload);
            window.removeEventListener('resize', lazyload);
            window.removeEventListener('orientationChange', lazyload);
          }
        }, 20);
      }

      document.addEventListener('scroll', lazyload);
      window.addEventListener('resize', lazyload);
      window.addEventListener('orientationChange', lazyload);
    }
  }
}
