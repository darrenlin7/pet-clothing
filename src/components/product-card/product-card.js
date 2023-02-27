import Button from "../button/button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./product-card.scss";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    return addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
