import { useState } from "react";
import { GlobalStyle } from "./Components/Base/GlobalStyle.js";
import Cart from "./Components/Cart/index.js";
import Feature from "./Components/Feature/index.js";
import Footer from "./Components/Layout/Footer/index.js";
import Hero from "./Components/Layout/Hero/index.js";
import Products from "./Components/Products/index.js";
import CartProvider from "./Store/CartProvider.js";

function App() {
  const [showCart, setShowCart] = useState(false);

  const CartToggleHandler = () => {
    setShowCart(!showCart);
  };

  const closeCartHandler = ()=>{
    setShowCart(false)
  }

  return (
    <div >
      <CartProvider>
        <GlobalStyle />
        <Hero onToggleCart={CartToggleHandler} />
        {showCart && <Cart onCloseCart={closeCartHandler} />}
        <Products
          heading="Choose your favorite"
          data={"menu"}
          id="mainCourse"
        />
        <Feature />
        <Products
          heading="Sweet Treats for You"
          data={"dessert"}
          id="dessert"
        />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
