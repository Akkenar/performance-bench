import {
  AfterViewInit,
  Component,
  Injector,
  NgModuleFactoryLoader,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular';

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private loader: NgModuleFactoryLoader, private inj: Injector) {}

  ngAfterViewInit(): void {
    // Load the styles.
    this.loadStyle();
    // Load the header.
    this.loader
      .load('src/app/header/header.module#HeaderModule')
      .then(moduleFactory => {
        const entryComponent = (<any>moduleFactory.moduleType).entry;
        const moduleRef = moduleFactory.create(this.inj);

        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
          entryComponent
        );
        this.container.createComponent(compFactory);
      });
  }

  private loadStyle() {
    if (environment.production) {
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link') as any;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'styles.css';
      link.media = 'all';
      head.appendChild(link);
    }
  }
}
