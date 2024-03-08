import { Component } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    this.saveProduct();
  }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe({
      next: (data) => {
        this.gotoProductList();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  gotoProductList() {
    this.router.navigate(['/products']);
  }
}
