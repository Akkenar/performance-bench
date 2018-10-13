import {
  AfterViewInit,
  Component,
  Injector,
  NgModuleFactoryLoader,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

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
}
