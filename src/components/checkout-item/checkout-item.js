import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCart } from "../../store/cart/cart.selector";
import {
  CheckoutItemContainer,
  RemoveButton,
  Arrow,
  Value,
  ImageContainer,
} from "./checkout-item.styles.js";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name"> {name} </span>
      <span className="quantity">
        <Arrow className="arrow" onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value className="value">{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </span>
      <span className="price"> {price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
