import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _urlBase = 'http://localhost:8080/inventario-app';
  private _http = inject(HttpClient);

  constructor(private clienteHttp: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._urlBase + '/findAll');
  }

  saveProduct(product: Product): Observable<Object> {
    return this._http.post<Object>(this._urlBase + '/save', product);
  }

  findById(id: number) {
    return this._http.get<Product>(`${this._urlBase}/findById/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object> {
    return this._http.put<Object>(`${this._urlBase}/update/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object> {
    return this._http.delete<Object>(`${this._urlBase}/delete/${id}`);
  }
}
