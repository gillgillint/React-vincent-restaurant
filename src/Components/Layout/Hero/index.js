import React, { useState } from "react";
import Navbar from "../../Navbar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroOrder,
} from "./HeroElements";
import Sidebar from "../../Sidebar/index";

function Hero(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar sidebarToggle={toggleSidebarHandler} onToggleCart={props.onToggleCart}/>
      <Sidebar sidebarToggle={toggleSidebarHandler} isOpen={isOpen} />
      <HeroContent>
        <HeroItems>
          <h1>Greatest Restaurant</h1>
          <p>Making you happy</p>
          <HeroOrder to="mainCourse" smooth={true}>
            Place Order
          </HeroOrder>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
