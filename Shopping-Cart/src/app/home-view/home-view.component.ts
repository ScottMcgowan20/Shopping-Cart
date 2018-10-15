import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { shoppingItem } from '../models/shoppingItem';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {


  showCart: boolean;
  items: shoppingItem[];
  itemNames: String[] = ['Classic Polo', 'Rubiks Cube', 'Flip Flops', 'Running Shoes', '4x4 Rubiks Cube', 'Eagles Sweatshirt'];
  itemPrices: number[] = [20.00, 10.00, 40.00, 60.00, 25.00, 45.00];
  itemQuantities: number[] = [1, 1, 1, 1, 1, 1];
  containsItems: boolean;
  totalCost: number;


  constructor() {
    this.showCart = false;
    this.containsItems = false;
    this.items = [];
    let index = 0;
    for(let name of this.itemNames) {
      this.items[index] = new shoppingItem(name, 0, this.itemPrices[index]);
      index ++;
    }
    this.totalCost = 0;
   }

  ngOnInit() {
  }

  cartToggle() {
    this.showCart = !this.showCart;
  }

  updateQuantity(event: any, index: number) {
    this.itemQuantities[index] = parseInt(event.target.value);
  }

  updateItems(itemsSentOut) {
    this.items = itemsSentOut;
  }

  updateCost(inCost) {
    this.totalCost = inCost
  }

  updateContains(inContains) {
    this.containsItems = inContains;
  }

  addItemToCart(index: number) {
    this.containsItems = true;
    this.items[index].amount += this.itemQuantities[index];
    this.totalCost += this.itemPrices[index] * this.itemQuantities[index];
    alert('Item(s) added to cart');
  }
}
