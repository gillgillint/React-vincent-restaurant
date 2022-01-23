import React, { useContext } from "react";
import { Bars, Nav, NavbarLink, NavCartIcon, NavIcon } from "./NavbarElement";
import { CartIcon } from "../Cart/CartElements";
import CartContext from "../../Store/cart-context";

function Navbar(props) {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const TotalOrder = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  return (
    <>
      <Nav>
        <NavbarLink to="/">Vincent</NavbarLink>
        <NavIcon onClick={props.sidebarToggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        <NavCartIcon onClick={props.onToggleCart}>
          <CartIcon />
          {items.length === 0 ? "" : <p>{TotalOrder}</p>}
        </NavCartIcon>
      </Nav>
    </>
  );
}

export default Navbar;
