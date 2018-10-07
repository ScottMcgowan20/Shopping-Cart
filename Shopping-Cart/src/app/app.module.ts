import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './cart-view/cart-view.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'cart',
    component: CartViewComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
