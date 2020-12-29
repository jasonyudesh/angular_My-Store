import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  submitData;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  clear() {
    this.items = this.cartService.clearCart();
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // this.items = this.cartService.clearCart();

    this.checkoutForm.reset();

    this.submitData = customerData;

    console.log("Your order has been submitted", customerData);
  }
}
