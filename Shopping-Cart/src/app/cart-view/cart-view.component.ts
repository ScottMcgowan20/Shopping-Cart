import { Component, OnInit, Input } from '@angular/core';
import { shoppingItem } from '../models/shoppingItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  @Input() items: shoppingItem[];
  @Input() containsItems: boolean;
  @Input() totalCost: number;

  constructor() {
   }

  ngOnInit() {
  }

}
