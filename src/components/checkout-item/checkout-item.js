import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  RemoveButton,
  Arrow,
  Value,
  ImageContainer,
} from "./checkout-item.styles.js";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <Value className="value">{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </span>
      <span className="price"> {price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
