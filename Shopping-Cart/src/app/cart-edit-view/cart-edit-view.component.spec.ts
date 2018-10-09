import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEditViewComponent } from './cart-edit-view.component';

describe('CartEditViewComponent', () => {
  let component: CartEditViewComponent;
  let fixture: ComponentFixture<CartEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
