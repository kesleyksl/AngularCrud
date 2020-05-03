import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
  }
  createProduct(){
    
    this.productService.create(this.product).subscribe(
      product=>{
        this.productService.showMessage('Produto Criado');
        this.router.navigate(['/products']);
      },
      err=>{
        this.productService.showMessage('Erro ao criar produto');
      }
    )
    
  }

  cancel(){
    this.router.navigate(['/products']);
  }
}
