import { Component, OnInit } from '@angular/core';
import Product from 'src/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProduct(id: any) {
    this.service.deleteProduct(id).subscribe(res => {
      console.log("Deleted");
      this.ngOnInit(); 
    });
  }

}
