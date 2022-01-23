import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import {
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductDesc,
  ProductsButton,
} from "./ProductsElements";

function ProductItem({ menu }) {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      id: menu.id,
      name: menu.name,
      price: menu.price,
      amount: 1,
      img:menu.img
    });
  };

  return (
    <ProductCard key={menu.id}>
      <ProductImg src={menu.img} />
      <ProductInfo>
        <ProductTitle>{menu.name}</ProductTitle>
        <ProductDesc>{menu.description}</ProductDesc>
        <ProductPrice>${menu.price}</ProductPrice>
        <ProductsButton onClick={addItemToCartHandler}>
          add to Cart
        </ProductsButton>
      </ProductInfo>
    </ProductCard>
  );
}

export default ProductItem;
