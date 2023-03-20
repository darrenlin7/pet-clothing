import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
} from "./product-card.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCart } from "../../store/cart/cart.selector";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    console.log("addProductToCart");
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
