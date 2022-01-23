import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./sidebarElements";

function Sidebar(props) {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.sidebarToggle}>
      <Icon>
        <CloseIcon />
      </Icon>

      <SidebarMenu>
        <SidebarLink
          onClick={props.sidebarToggle}
          to="mainCourse"
          smooth={true}
        >
          Main Course
        </SidebarLink>
        <SidebarLink
          onClick={props.sidebarToggle}
          smooth={true}
          duration={800}
          to="dessert"
        >
          Dessert
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute
          onClick={props.sidebarToggle}
          to="mainCourse"
          smooth={true}
        >
          Order Now
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
