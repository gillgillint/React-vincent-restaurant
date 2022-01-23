import React, { useContext } from "react";
import { useState } from "react";
import CartContext from "../../Store/cart-context";
import CartCheckout from "./CartCheckout";
import { CartActions, CartContainer, CartWrapper } from "./CartElements";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const hasOrder = cartCtx.items.length > 0;

  const [checkout, setCheckout] = useState(false);

  const showCheckoutHandler = () => {
    setCheckout(true);
  };

  const closeCartCheckoutHandler = () => {
    setCheckout(false);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const confirmOrderHandler = async (userData) => {
    await fetch(
      "https://vincent-database-e88bf-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    cartCtx.clearItem();
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        img={item.img}
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={removeItemHandler.bind(null, item.id)}
      />
    );
  });

  return (
    <div>
      <CartContainer>
        {hasOrder ? <h4>Your Order</h4> : <h4>No Order</h4>}
        {hasOrder && (
          <div>
            <CartWrapper>{cartItems}</CartWrapper>
            <CartActions>
              <button onClick={showCheckoutHandler}>Check out</button>
              <span className="total">Total</span>
              <span>$ {cartCtx.totalAmount.toFixed(2)}</span>
            </CartActions>
          </div>
        )}
      </CartContainer>
      {checkout && (
        <CartCheckout
          onCancel={closeCartCheckoutHandler}
          onConfirmOrder={confirmOrderHandler}
          onCloseCart={props.onCloseCart}
        />
      )}
    </div>
  );
}

export default Cart;
