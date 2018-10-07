import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {


  numShirts: number;
  numShirtsSelected: number; 
  showCart: boolean; 


  constructor() {
    this.numShirts = 0;
    this.numShirtsSelected = 1;
    this.showCart = false;
   }

  ngOnInit() {
  }

  cartToggle() {
    this.showCart = !this.showCart;
  }

  addShirt() {
    this.numShirts = this.numShirts + this.numShirtsSelected;
  }

  updateQuantity(event: any) {
    this.numShirtsSelected = parseInt(event.target.value);
  }
}
