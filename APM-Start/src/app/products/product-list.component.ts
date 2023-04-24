import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Subscription, Observable, catchError, pipe, EMPTY } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];

  // products: Product[] = [];
  // sub!: Subscription;
  products$ = this.productService.products$.pipe(
    catchError((err: any) => {
      this.errorMessage = err
      return EMPTY;
    })
  )
  constructor(private productService: ProductService) { }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
