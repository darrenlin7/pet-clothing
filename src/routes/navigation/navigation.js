import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  NavLink,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles.js";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
