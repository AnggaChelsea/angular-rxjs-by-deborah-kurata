import { Component, OnInit } from '@angular/core';

import { Subscription, Observable, catchError, pipe, EMPTY } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];

  // products: Product[] = [];
  // sub!: Subscription;
  products$!: Observable<Product[]>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.sub = this.productService.getProducts()
    //   .subscribe({
    //     next: products => this.products = products,
    //     error: err => this.errorMessage = err
    //   });
    this.getData()
  }

  getData(){
    this.products$ = this.productService.getProducts().pipe(
      catchError(err => {
        this.errorMessage = err
        return EMPTY; 
      })
    )
  }

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
