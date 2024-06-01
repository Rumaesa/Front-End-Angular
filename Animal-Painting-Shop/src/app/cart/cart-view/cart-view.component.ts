import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css',
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];
  totalCartPrice: number = 0;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.getTotalCartPrice = this.getTotalCartPrice;
    });
  }

  getTotalCartPrice(): number {
    let price = 0;
    for (let item of this.cartItems) {
      price = price + item.price;
    }
    return price;
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe();
  }
}
