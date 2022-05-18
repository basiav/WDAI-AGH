import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartReservations } from '../../models/reservations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items!: CartReservations;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }

  getCartValue(): number {
    let acc: number = 0;
    this.items.forEach((quantity, dish) => {
      if (dish) {
        acc += quantity * dish.price;
      }
    });
    return acc;
  }

  getCurrency(): string {
    return this.cartService.currency;
  }

}
