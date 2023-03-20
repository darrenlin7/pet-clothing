import { useNavigate } from "react-router-dom";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.js";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector.js";

function CartDropdown() {
  const cartItems = useSelector(selectCart);
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
