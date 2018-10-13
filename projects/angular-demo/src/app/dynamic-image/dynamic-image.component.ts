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

  private displayTrigger: ElementRef;

  public showImage = false;
  public imageInView = false;
  private readonly observer: IntersectionObserver;

  constructor(displayTrigger: ElementRef) {
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      OBSERVER_OPTIONS
    );
    this.displayTrigger = displayTrigger;
  }

  get shouldDisplayImage(): boolean {
    return this.showImage && this.imageInView;
  }

  ngOnInit() {
    this.observer.observe(this.displayTrigger.nativeElement);
  }

  private showImageWhenLoaded() {
    const image = new Image();
    image.onload = () => {
      this.showImage = true;
    };
    image.src = this.src;
  }

  private handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.imageInView = true;
        this.showImageWhenLoaded();

        if (this.observer) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  }
}
