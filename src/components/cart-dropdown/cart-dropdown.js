import { useNavigate } from "react-router-dom";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.js";
import Button from "../button/button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
