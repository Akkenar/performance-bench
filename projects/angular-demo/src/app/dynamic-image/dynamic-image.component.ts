import { Component, ElementRef, Input, OnInit } from '@angular/core';

const OBSERVER_OPTIONS = {
  rootMargin: '0px 0px 0px 50px',
};

@Component({
  selector: 'app-dynamic-image',
  templateUrl: './dynamic-image.component.html',
})
export class DynamicImageComponent implements OnInit {
  @Input()
  public src: string;

  @Input()
  public alt: string;

  @Input()
  public width: string;

  @Input()
  public height: string;

  public imageInView = false;
  private readonly observer: IntersectionObserver;

  constructor(private displayTrigger: ElementRef) {
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      OBSERVER_OPTIONS
    );
  }

  get shouldDisplayImage(): boolean {
    return this.imageInView;
  }

  get srcwebp(): string {
    // Hacky but will do for now.
    return this.src.replace('jpg', 'webp');
  }

  ngOnInit() {
    this.observer.observe(this.displayTrigger.nativeElement);
  }

  private handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.imageInView = true;

        if (this.observer) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  }
}
