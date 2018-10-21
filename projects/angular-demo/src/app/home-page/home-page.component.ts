import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AsyncComponentsService } from '../core/async-components.service';
import { ProductsService } from '../core/products/products.service';
import { Product } from '../core/products/products.type';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public products: Observable<Product[]>;

  constructor(
    private productsService: ProductsService,
    private loader: AsyncComponentsService
  ) {}

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  ngOnInit() {
    this.products = this.productsService.getAll().pipe(shareReplay());
  }

  addToBasket() {
    this.loader.load(
      'src/app/add-to-basket-modal/add-to-basket-modal.module#AddToBasketModalModule',
      this.container
    );
  }
}
