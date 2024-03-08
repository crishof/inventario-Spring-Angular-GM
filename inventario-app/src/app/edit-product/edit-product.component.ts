import { Component } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  product: Product = new Product();
  id: number;

  constructor(
    private _productoService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this._productoService.findById(this.id).subscribe({
      next: (data: any) => (this.product = data),
      error: (error: any) => console.log(error),
    });
  }

  onSubmit() {
    this.updateProduct();
  }

  updateProduct() {
    this._productoService.updateProduct(this.id, this.product).subscribe({
      next: (data) => this.goToList(),
      error: (error: any) => console.log(error),
    });
  }

  goToList() {
    this._router.navigate(['products']);
  }
}
