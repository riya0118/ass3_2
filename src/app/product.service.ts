import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from 'src/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:9000/carts';

  constructor(private http: HttpClient) { }

  addProduct(pname: string, price: number, quantity: number) {
    const obj = {
      pname: pname,
      price: price,
      quantity: quantity
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log("Done"));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.uri}`);
  }

  editProduct(id: any) {
    return this.http.get(`${this.uri}/${id}`);
  }

  updateProduct(id: any, pname: string, price: number, quantity: number) {
    const obj = {
      pname: pname,
      price: price,
      quantity: quantity
    };
    this.http.put(`${this.uri}/${id}`, obj).subscribe(res => console.log("Done"));
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}
