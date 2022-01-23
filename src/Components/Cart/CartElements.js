import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const CartIcon = styled(FaShoppingCart)`
  font-size: 27px;
  cursor: pointer;
  color: #028f46;
`;

export const CartContainer = styled.div`
  display: block;
  position: fixed;
  top: ${(props) => (props.checkout ? "4.5rem" : "3.5rem")};
  left: ${(props) => (props.checkout ? "20rem" : "1.6rem")};
  width: 280px;
  height: ${(props) => (props.checkout ? "315px" : "330px")};
  background: #000;
  opacity: 0.9;
  transition: 0.3s ease-in-out;
  clip-path: ${(props) =>
    props.checkout
      ? ""
      : `polygon(0 0, 0 0, 9% 5%, 53% 5%, 100% 5%, 100% 100%, 0 100%);`};

  h4 {
    text-transform: uppercase;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid #333;
    margin: 1.5rem auto 0;
    text-align: center;
    color: #fff;
  }

  border-radius: 8px;
  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;

export const CartWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-top: 8px;
  height: 210px;
  overflow-y: scroll;
  color: #fff;
`;

export const CartItemStyled = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 1rem 10px;
  border-bottom: 0.5px solid #333;

  .cart-item-img {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
  .order__name {
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CartItemActions = styled.div`
  margin-left: auto;
  display: flex;
`;

export const CartItemButton = styled.button`
  background-color: #fff;
  border-radius: 3px;
  color: #000;
  padding: 0 6px;
  border: none;
  font-size: 20px;
  margin-left: 3px;
  cursor: pointer;
`;
export const CartActions = styled.div`
  display: flex;
  color: #fff;
  padding: 10px 10px;

  button {
    margin-right: auto;
    padding: 3px;
    color: #000;
    background-color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  .total {
    margin-right: 5px;
  }
`;

export const CheckoutForm = styled.form`
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;

  .control {
    margin-bottom: 0.5rem;

    label {
      font-weight: bold;
      margin-bottom: 0.25rem;
      display: block;
      color: #fff;
    }

    input {
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
    }
  }

  .invalid {
    label {
      color: #ca3e51;
    }
    input {
      border-color: #aa0b20;
      background-color: #ffeff1;
    }
    p {
      color: #ca3e51;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;


    button {
      font: inherit;
      color: #e31837;
      cursor: pointer;
      background-color: transparent;
      border: none;
      border-radius: 8px;
      background-color: #fff;
      padding: 5px 10px;

      &.submit {
        color: #000;
      }
    }
  }
`;
