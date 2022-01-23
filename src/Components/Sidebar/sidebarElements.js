import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link} from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 350px;
  background-color: #028f46;
  display: grid;
  align-items: center;
  top: 0;
  transition: .3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #e9ba23;
    transition: .2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background-color: #000;
  white-space: nowrap;
  padding: 16px 64px;
  color: #e9ba23;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .2s ease-in-out;
  text-decoration: none;

  
  &:hover {
    color: #010606;
    transition: .2s ease-in-out;
    background-color: #fff;
  }
`;
