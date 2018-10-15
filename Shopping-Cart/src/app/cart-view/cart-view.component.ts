import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() itemsSentOut = new EventEmitter<shoppingItem[]>;
  @Output() containsSentOut = new EventEmitter<boolean>;
  @Output() costSentOut = new EventEmitter<number>;


  constructor() {
   }

  ngOnInit() {
  }

  increment(name) {
    for(let item of this.items) {
      if(item.name == name) {
        item.amount ++;
        this.totalCost += item.price;
        if(this.totalCost == 0) {
          this.containsItems = false;
        }
        this.itemsSentOut.emit(this.items);
        this.containsSentOut.emit(this.containsItems);
        this.costSentOut.emit(this.totalCost);
      }
    }
  }

  decrement(name) {
    for(let item of this.items) {
      if(item.name == name) {
        item.amount --;
        this.totalCost -= item.price;
        if(this.totalCost == 0) {
          this.containsItems = false;
        }
        this.itemsSentOut.emit(this.items);
        this.containsSentOut.emit(this.containsItems);
        this.costSentOut.emit(this.totalCost);
      }
    }
  }

}
