import "./cart-item.scss";

function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span classname="name">{name}</span>
        <span classname="quantity">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
