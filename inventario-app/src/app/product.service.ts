import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _urlBase = 'http://localhost:8080/inventario-app/findAll';
  private _http = inject(HttpClient);

  constructor(private clienteHttp: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._urlBase);
  }
}
