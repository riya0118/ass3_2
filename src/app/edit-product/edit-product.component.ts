import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any = {};
  productForm: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private route: ActivatedRoute, private service: ProductService) {
    this.productForm = builder.group({
      pname: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    })
   }

   updateProduct() {
    this.service.updateProduct(this.product._id, this.productForm.value.pname, this.productForm.value.price, this.productForm.value.quantity);
    this.router.navigate(['products']);
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.editProduct(params['id']).subscribe(res => {
        this.product = res;
      });
    });
  }

}
