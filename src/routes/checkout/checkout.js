import CheckoutItem from "../../components/checkout-item/checkout-item";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.js";
import { useSelector } from "react-redux";
import { selectCart, selectCartTotal } from "../../store/cart/cart.selector";

function Checkout() {
  const cartItems = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => {
        return <CheckoutItem cartItem={item} />;
      })}

      <Total>Total: ${cartTotal} </Total>
    </CheckoutContainer>
  );
}

export default Checkout;
