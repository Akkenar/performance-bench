import {
  Injectable,
  Injector,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsyncComponentsService {
  constructor(private loader: NgModuleFactoryLoader, private inj: Injector) {}
  private isLoaded = {};

  public load(module: string, container: ViewContainerRef): Promise<any> {
    if (this.isLoaded[module]) {
      return Promise.resolve();
    }

    return this.loader.load(module).then(moduleFactory => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.inj);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
        entryComponent
      );
      container.createComponent(compFactory);
      this.isLoaded[module] = true;
    });
  }
}
