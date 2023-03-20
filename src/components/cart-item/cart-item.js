import { CartItemContainer, ItemDetails, Name } from "./cart-item.styled.js";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="quantity">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

export default CartItem;
