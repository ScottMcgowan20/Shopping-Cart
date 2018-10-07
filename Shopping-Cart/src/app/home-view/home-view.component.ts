import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  numShirts;
  numShirtsSelected ;
  constructor() {
    this.numShirts = 0;
    this.numShirtsSelected = 1;
   }

  ngOnInit() {
  }

  addShirt() {
    this.numShirts = this.numShirts + this.numShirtsSelected;
  }

  updateQuantity(event: any) {
    this.numShirtsSelected = parseInt(event.target.value);
  }
}
