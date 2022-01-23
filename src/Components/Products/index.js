import React, { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import {
  ProductsContainer,
  ProductHeading,
  ProductWrapper,
} from "./ProductsElements";

function Products(props) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          `https://vincent-database-e88bf-default-rtdb.firebaseio.com/${props.data}.json`
        );
        if (!res.ok) {
          throw new Error(`${res.statusText} ${res.status}`);
        }
        const data = await res.json();
        const loadedMenu = [];
        for (const meal in data) {
          loadedMenu.push({
            id: meal,
            name: data[meal].name,
            description: data[meal].desc,
            price: data[meal].price,
            img: data[meal].img,
          });
        }
        setMenu(loadedMenu);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeals();
  }, [props.data]);

  const menuList = menu.map((menu) => {
    return <ProductItem menu={menu} key={menu.id}/>;
  });
  return (
    <>
      <ProductsContainer id={props.id}>
        <ProductHeading>{props.heading}</ProductHeading>
        <ProductWrapper>{menuList}</ProductWrapper>
      </ProductsContainer>
    </>
  );
}

export default Products;
