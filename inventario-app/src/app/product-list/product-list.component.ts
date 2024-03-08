import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this._productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  editProduct(id: number) {
    this._router.navigate(['edit-product', id]);
  }

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe({
      next: (data) => this.getProducts(),
      error: (error) => console.log(error),
    });
  }
}
