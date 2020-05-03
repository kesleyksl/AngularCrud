import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.readById(id).subscribe(
      product=> this.product = product
    )
  }
  deleteProduct(){
    this.productService.delete(this.product.id).subscribe(
    ()=> this.productService.showMessage("Produto removido com sucesso!")
    );
    this.router.navigate(['/products'])
  }
  cancel(){
    this.router.navigate(['/products'])
  }
}
