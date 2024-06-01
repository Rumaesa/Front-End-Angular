import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RippleRef } from '@angular/material/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getproducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackBar.open('Added to Cart!', '', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    });
  }
}
