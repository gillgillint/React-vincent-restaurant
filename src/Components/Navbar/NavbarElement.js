import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavbarLink = styled(NavLink)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    font-size: 16px;
  }
`;

export const Bars = styled(HiMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const NavCartIcon = styled.div`
  display: block;
  position: fixed;
  padding: 1rem;
  top: 1rem;
  left: 3px;
  cursor: pointer;

  p {
    position: absolute;
    top: 5px;
    right: 4px;
    background-color: #e31837;
    padding: 0 7px;
    border-radius: 50%;
    color: #fff;
  }

  @media screen and (max-width: 400px) {
    left: 10px;
  }
`;
