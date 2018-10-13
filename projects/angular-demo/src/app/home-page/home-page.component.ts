import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ProductsService } from '../core/products/products.service';
import { Product } from '../core/products/products.type';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public products: Observable<Product[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAll().pipe(shareReplay());
  }
}
