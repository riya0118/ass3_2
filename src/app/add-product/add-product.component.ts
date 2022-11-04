import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private service: ProductService) {
    this.productForm = this.builder.group({
      pname: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });
   }

   insertProduct(){
    this.service.addProduct(this.productForm.value.pname, this.productForm.value.price, this.productForm.value.quantity)
    this.router.navigate(['products'])
   }

  ngOnInit(): void {
  }

}
