import React from "react";
import {
  CartItemActions,
  CartItemButton,
  CartItemStyled,
} from "./CartElements";

function CartItem(props) {
  return (
    <CartItemStyled>
      <img className="cart-item-img" src={props.img} />
      <span className="order__name">{props.name}</span>
      <b>
        {props.amount} x &nbsp; {props.price}
      </b>
      <CartItemActions>
        <CartItemButton onClick={props.onRemove}>−</CartItemButton>
        <CartItemButton onClick={props.onAdd}>+</CartItemButton>
      </CartItemActions>
    </CartItemStyled>
  );
}

export default CartItem;
